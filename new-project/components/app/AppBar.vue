<template lang="html">
    <div class="appBar d-flex justify-between py-[15px] px-0">
       <div class="col-md-4">
        <div class="left d-flex align-items-center">
            <div class="log px-[50px]">
                <img src="/assets/images/logo.png" alt="Logo" class="img-fluid cursor-pointer w-[183px] h-[36px]"/>
            </div>
            <div class="dashboardOverview pl-[7%] text-[28px] font-inter font-semibold text-[#343C6A]">
                <p class="m-0 pt-2">Overview</p>
            </div>
        </div>
       </div>
       <div class="col-md-8">
       <div class="right d-flex justify-content-end">
        <div class="searchBar border-1 rounded-5 p-2 bg-[#F5F7FA] text-[#8BA3CB] mr-[50px]">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" class="inputSearch px-2 shadow-none bg-[#F5F7FA] focus:outline-none" placeholder="Search for something">
        </div>
        <div class="settingIcon">
            <i class="fa fa-cog text-[#718EBF] text-[24px] font-[700] bg-[#F5F7FA] p-[10px] rounded-full cursor-pointer mr-[50px]" aria-hidden="true"></i>
            <i class="fa-solid fa-bell text-[24px] font-[700] text-[#FE5C73] text-[24px] font-[700] bg-[#F5F7FA] p-[10px] rounded-full cursor-pointer mr-[50px]"></i>
            <i class="fa-solid fa-toggle-on text-[24px] font-[700] text-[#4C49ED] text-[24px] font-[700] bg-[#F5F7FA] p-[10px] rounded-full cursor-pointer mr-[50px]"></i>
        </div>
        
       </div>
       </div>
    </div>
</template>

