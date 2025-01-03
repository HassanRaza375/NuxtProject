<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
<template lang="html">
    <div class="main-dashboard">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-8">
                   <div class="top mx-4">
                    <div class="head d-flex justify-between items-center">
                        <h2 class="title text-[#343C6A] font-semibold text-[22px] leading-[26.63px]">My Chart</h2>
                        <p class="tag text-[#343C6A] font-semibold text-[17px] leading-[20.57px]">See All</p>
                    </div>
                    <div class="topCards d-flex justify-between">
                        <div class="col-md-6">
                            <div class="leftCard bg-[#4C49ED] text-[#fff] rounded-4 p-3">
                                <div class="top d-flex justify-between align-items-center">
                                    <div class="balance">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px]">Balance</p>
                                        <p class="price m-0 font-semibold text-[20px] leading-[24px]">$5,756</p>
                                    </div>
                                    <img src="/assets/images/Chip_Card.png" alt="Logo" class="img-fluid cursor-pointer w-[34px] h-[34px]"/>
                                </div>
                                <div class="center d-flex align-items-center  my-5">
                                    <div class="balance">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px]">CARD HOLDER</p>
                                        <p class="price m-0 font-semibold text-[15px] leading-[24px]">Eddy Cusuma</p>
                                    </div>
                                    <div class="balance px-5">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px]">VALID THRU</p>
                                        <p class="price m-0 font-semibold text-[15px] leading-[24px]">12/22</p>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="balance d-flex justify-between align-items-center mt-4">
                                        <p class="bal m-0 text-600 text-[22px] leading-[14.4px]">3778 **** **** 1234</p>
                                        <img src="/assets/images/card-toggle.png" alt="Logo" class="img-fluid cursor-pointer w-[34px] h-[34px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rightCard bg-[#fff] text-[#343C6A] rounded-4 p-3 ms-3">
                                <div class="top d-flex justify-between align-items-center">
                                    <div class="balance">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px]">Balance</p>
                                        <p class="price m-0 font-semibold text-[20px] leading-[24px]">$5,756</p>
                                    </div>
                                    <img src="/assets/images/Chip_Card1.png" alt="Logo" class="img-fluid cursor-pointer w-[34px] h-[34px]"/>
                                </div>
                                <div class="center d-flex align-items-center  my-5">
                                    <div class="balance">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px]">CARD HOLDER</p>
                                        <p class="price m-0 font-semibold text-[15px] leading-[24px] whitespace-nowrap">Eddy Cusuma</p>
                                    </div>
                                    <div class="balance px-5">
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px] whitespace-nowrap">VALID THRU</p>
                                        <p class="price m-0 font-semibold text-[15px] leading-[24px]">12/22</p>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="balance d-flex justify-between align-items-center mt-3 pt-2 border-t border-[#DFEAF2]">
                                        <p class="bal m-0 text-600 text-[22px] leading-[14.4px]">3778 **** **** 1234</p>
                                        <img src="/assets/images/card-toggle1.png" alt="Logo" class="img-fluid cursor-pointer w-[34px] h-[34px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                
             
                <div class="col-12 col-md-4">
                    <div class="top-right">
                        <div class="head">
                            <p class="title font-semibold text-[22px] leading-[26.63px] text-[#343C6A]">Recent Transaction</p>
                        </div>

                        <div class="rightCard bg-[#fff] text-[#343C6A] rounded-4 p-3">
                                <div class="top d-flex justify-between align-items-center">
                                    <div class="balance d-flex align-items-center">
                                       <div class="left">
                                        <img src="/assets/images/trans.png" alt="Logo" class="img-fluid cursor-pointer w-[55px] h-[55px]"/>
                                       </div>
                                       <div class="right px-3">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#232323]">Deposit from my Card</p>
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px] text-[#718EBF] pt-2">28 January 2021</p>
                                       </div>
                                       
                                    </div>
                                    <div class="balance">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#FF4B4A]">-$850</p>
                                    </div>
                                    
                                </div>

                                <div class="center d-flex justify-between align-items-center mt-3">
                                    <div class="balance d-flex align-items-center">
                                       <div class="left">
                                        <img src="/assets/images/trans.png" alt="Logo" class="img-fluid cursor-pointer w-[55px] h-[55px]"/>
                                       </div>
                                       <div class="right px-3">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#232323]">Deposit Paypal</p>
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px] text-[#718EBF] pt-2">25 January 2021</p>
                                       </div>
                                       
                                    </div>
                                    <div class="balance">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#41D4A8]">+$2,500</p>
                                    </div>
                                    
                                </div>

                                <div class="bottom d-flex justify-between align-items-center mt-3">
                                    <div class="balance d-flex align-items-center">
                                       <div class="left">
                                        <img src="/assets/images/trans.png" alt="Logo" class="img-fluid cursor-pointer w-[55px] h-[55px]"/>
                                       </div>
                                       <div class="right px-3">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#232323]">Jemi Wilson</p>
                                        <p class="bal m-0 text-400 text-[12px] leading-[14.4px] text-[#718EBF] pt-2">21 January 2021</p>
                                       </div>
                                       
                                    </div>
                                    <div class="balance">
                                        <p class="bal m-0 text-500 text-[16px] leading-[14.4px] text-[#41D4A8]">+$2,500</p>
                                    </div>
                                    
                                </div>
                               
                               
                               
                            </div>
                    </div>
                </div>


            </div>


            <div class="row">
                <div class="col-12 col-md-8">
                   <div class="top mx-4">
                    <div class="head d-flex justify-between items-center">
                        <h2 class="title text-[#343C6A] font-semibold text-[22px] leading-[26.63px]">Weekly Activity</h2>
                    </div>
                    <div class="topCards d-flex justify-between">
                     okay
                    </div>
                   </div>
                </div>
                
             
                <div class="col-12 col-md-4">
                    <div class="top-right">
                        <div class="head">
                            <p class="title font-semibold text-[22px] leading-[26.63px] text-[#343C6A]">Expense Statistics</p>
                        </div>
                        ok
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>




