<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    console.log(this.$route.params.id);
    const seed = 'd74c3705677f9dfb';
    axios
      .get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
