<template>
    <div class="py-3 px-5 text-white cursor-pointer bg-primary">
        <div class="mx- text-black">
            <div :class="updatepassword ? 'w-full' : 'w-0'"
                class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20   h-screen z-10"></div>
            <div :class="updatepassword ? 'bottom-0' : ' bottom-[100rem]'"
                class="duration-700 ease-in-out z-10 sm:right-12 right-4 w-full h-full justify-center items-center flex pt-32  mx-1 gap-10 fixed">
                <div class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem"></div>
                <div>
                    <div class="text-[16px] w-full   bg-white w mx-4 py-5 px-0">
                        <p class="text-[15px] text-center">Update Password</p>




                        <div class="mx-4 pt-5">

                            <input type="Password" @input="onInput" name="" placeholder="Current password "     class="w-full h-10 outline-none mb-3  px-3 rounded-[.2rem] border" id="updatePassword" />

                            <input type="Password" @input="onInput" name="" placeholder="New password "     class="w-full h-10 outline-none mb-3  px-3 rounded-[.2rem] border" id="Password" />
                          
                            <input type="Password" @input="onInput" name="" placeholder="Confirm password "     class="w-full h-10 outline-none mb-3  px-3 rounded-[.2rem] border" id="confirm" />
                           <button @click="cancell()">  <p class=" text-red-700">cancell</p></button>
                            <Button class="m" :loading="loadingState" @click="resetPassword()" loadingText2="please wait">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
    data() {
        return {
            updatepassword: true,
            errorphone: '',
            disabled: '',
            erromessage: '',
            paswo: "password",
            erroremail: false,
            errorpassword: false,
            loadingState: false,
            form: {
                currentPassword: '',
                password: '',
                comfirmpassword: '',

            },

        }
    },

    methods: {

        cancell(){
            this.updatepassword = false
        },
        resetPassword(){
            console.log('resetPasswordresetPassword');
        }

    },

   

   

}

</script>