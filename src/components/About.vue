<template>
    <div>
        <h1>About</h1>
    </div>
</template>


<script>
export default {
  name: `About`,
  metaInfo() {
    return {
      title: "ABOUTPAGE  - Build your network in your field of interest",
      meta: [
        {
          name: "description",
          content:
            "ABOUTPAGE is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
        },
        {
          property: "og:title",
          content: "ABOUTPAGE - Build your network in your field of interest",
        },
        { property: "og:site_name", content: "ABOUTPAGE" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>