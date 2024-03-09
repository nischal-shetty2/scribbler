import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@nischal_shetty/blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization");
  try {
    if (!header) {
      c.status(401);
      return c.json({ error: "unauthorized", header });
    }
    const token = header;
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload.id) {
      c.status(403);
      return c.json({ error: "unauthorized123" });
    }
    c.set("userId", payload.id);
    await next();
  } catch (e) {
    c.status(403);
    return c.json({ message: "Youre not logged in" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "invalid inputs",
    });
  }

  try {
    let post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({ id: post.id });
  } catch (e) {
    return c.status(403);
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "invalid inputs",
    });
  }

  try {
    let post = await prisma.post.update({
      where: {
        id: body.id,
        authorId: c.get("userId"),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json(post.id);
  } catch (e) {
    return c.status(403);
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  let post = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  try {
    return c.json({ post });
  } catch (e) {
    return c.status(403);
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id = c.req.param("id");
    let post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(post);
  } catch (e) {
    return c.json({ e, msg: "lol" });
  }
});

//Delete blog route if needed uncomment
// blogRouter.delete("/:id",async(c)=>{
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env?.DATABASE_URL,
//   }).$extends(withAccelerate());

//   try {
//     const id = c.req.param("id");
//     let post = await prisma.post.delete({
//       where: {
//         id: id,
//       }
//     });
//     return c.json(post);
//   } catch (e) {
//     return c.json({ e, msg: "lol" });
//   }
// })
