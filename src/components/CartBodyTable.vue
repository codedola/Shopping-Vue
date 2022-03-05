<template>
  <table class="table">
    <thead>
      <tr>
        <th width="4%">#</th>
        <th>Pokemon</th>
        <th width="15%">Price</th>
        <th width="4%">Quantity</th>
        <th width="20%">Subtotal</th>
        <th width="25%">Action</th>
      </tr>
    </thead>
    <tbody id="my-cart-body">
      <!-- CART BODY Item -->
      <CartBodyItem />
    </tbody>
    <tfoot id="my-cart-footer">
      <!-- CART FOOTER -->
      <tr>
        <th colspan="6">Empty product in your cart</th>
      </tr>
      <tr>
        <td colspan="4">There are <b>5</b> items in your shopping cart.</td>
        <td colspan="2" class="total-price text-left">12 USD</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import CartBodyItem from "./CartBodyItem.vue";
export default {
  name: "CartBodyTable",
  components: { CartBodyItem },
  data() {
    return {};
  },
};
</script>

<style></style>
