<template>
  <!-- CART : START -->
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1 class="panel-title">Your Cart</h1>
      </div>
      <div class="panel-body">
        <CartBodyTable />
      </div>
    </div>
    <div class="alert alert-success" role="alert" id="mnotification">
      Updated <b>ivysaur</b>
    </div>
  </div>
  <!-- CART : END -->
</template>

<script>
import CartBodyTable from "./CartBodyTable.vue";
export default {
  name: "CartWrapper",
  components: { CartBodyTable },
  data() {
    return {};
  },
};
</script>

<style></style>
