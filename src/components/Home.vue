<template>
    <div>
        <h1>Home</h1>
    </div>
</template>


<script>
export default {
  name: `Home`,
  metaInfo() {
    return {
      title: "HOMEPAGE - Build your network in your field of interest",
      meta: [
        {
          name: "description",
          content:
            "HOMEPAGE is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
        },
        {
          property: "og:title",
          content: "HOMEPAGE - Build your network in your field of interest",
        },
        { property: "og:site_name", content: "HOMEPAGE" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>