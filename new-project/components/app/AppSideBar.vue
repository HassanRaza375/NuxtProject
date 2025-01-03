<template lang="">
    <div>
      <ul class="sideBar_List p-0">
        <li> <nuxt-link to="/dashboard" active-class="active">Dashboard</nuxt-link></li>
        <li> <nuxt-link to="/transaction">Transactions</nuxt-link></li>
        <li> <nuxt-link to="/account">Accounts</nuxt-link></li>
        <li> <nuxt-link to="/investment">Investments</nuxt-link></li>
        <li> <nuxt-link to="/creditCard">Credit Cards</nuxt-link></li>
        <li> <nuxt-link to="/loan">Loans</nuxt-link></li>
        <li> <nuxt-link to="/service">Services</nuxt-link></li>
        <li> <nuxt-link to="/privilige">My Priviliges</nuxt-link></li>
        <li> <nuxt-link to="/setting">Settings</nuxt-link></li>
       </ul>
       
    </div>
</template>
<style scoped>
.sideBar_List{
  font-size: 16px;
  line-height: 60px;
}
.sideBar_List li{
  width: 100%;
 
}
.sideBar_List li a:hover{
  color: #2D60FF;
  border-left: thick solid #2D60FF;
  border-radius: 0 10px 10px 0;
}
.sideBar_List li a{
  padding: 0px 50px;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Inter';
  text-decoration: none;
  color: #B1B1B1;
}
</style>