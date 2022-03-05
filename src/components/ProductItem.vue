<template>
  <!-- PRODUCT : START -->
  <div class="media product">
    <div class="media-left">
      <a href="javascript:;">
        <img
          class="media-object"
          src="/images/aplusautomation.jpg"
          alt="charmander"
        />
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">aplusautomation</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
        asperiores veniam repellat unde debitis quisquam magnam magni ut
        deleniti!
      </p>
      <input name="quantity-product-1" type="number" value="1" min="1" />
      <a data-product="1" href="javascript:;" class="price"> 12 USD </a>
    </div>
  </div>
  <!-- PRODUCT : END -->
</template>

<script>
export default {
  name: "ProductItem",
};
</script>

<style></style>
