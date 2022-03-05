<template>
  <!-- LIST PRODUCT : START -->
  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1 class="panel-title">List Products</h1>
      </div>
      <div class="panel-body" id="list-product">
        <template v-for="index in 4">
          <ProductItem :key="index" />
        </template>
      </div>
    </div>
  </div>
  <!-- LIST PRODUCT : END -->
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: { ProductItem },
  data() {
    return {};
  },
};
</script>

<style></style>
