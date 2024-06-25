<template>
    <div :class="props.updatepassword ? 'w-full' : 'w-0'" class="py-3 px-5 text-white cursor-pointer bg-primary">
        <div class="mx- text-black">
            <div :class="props.updatepassword ? 'w-full' : 'w-0'"
                class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20   h-screen z-10"></div>
            <div :class="props.updatepassword ? 'bottom-0' : ' bottom-[100rem]'"
                class="duration-700 ease-in-out z-10 sm:right-12 right-4 w-full h-full justify-center items-center flex pt-32  mx-1 gap-10 fixed">
                <div class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem"></div>
                <div>
                    <div class="text-[16px] w-full   bg-white w mx-4 py-5 px-0">
                        <p class="text-[15px] text-center">Update Password</p>




                        <div class="mx-4 pt-5">
                            <form action="" method="post">

                                <input v-model="state.form.currentPassword" type="Password" @input="onInput" name=""
                                    placeholder="Current password "
                                    :class="state.errorcurrentpassword ? ' border-secondary shake ' : '  border-primary  '"
                                    class="w-full h-10 outline-none mb-1  px-3 rounded-[.2rem] border"
                                    id="updatePassword" />
                                <p :class="state.errorcurrentpassword ? 'flex' : 'hidden '"
                                    class=" text-red-700  text-['13rem']">Please enter current password</p>





                                <input v-model="state.form.password" type="Password" @input="onInput" name=""
                                    placeholder="New password "
                                    :class="state.errorpassword ? ' border-secondary shake ' : '  border-primary  '"
                                    class="w-full h-10 outline-none  mb-1 px-3 rounded-[.2rem] border" id="Password" />
                                <p :class="state.errorpassword ? 'flex' : 'hidden '"
                                    class="  text-red-700 text-['13rem']">Please enter password</p>



                                <input v-model="state.form.comfirmpassword" type="Password" @input="onInput" name=""
                                    placeholder="Confirm password "
                                    :class="state.comfirmpassword ? ' border-secondary shake ' : '  border-primary  '"
                                    class="w-full h-10 outline-none mb-3  px-3 rounded-[.2rem] border" id="confirm" />
                                <p :class="state.comfirmpassword ? 'flex' : 'hidden '"
                                    class=" mb-3 text-red-700 text-['13rem']">password
                                    and confirm password must match</p>

                                <Button :loading="state.loadingState" @click="resetPassword()"
                                    loadingText="Authenticating"> Register</Button>

                            </form>
                            <p @click="cancell()">
                            <p class=" text-red-700">Cancel </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useHead } from '@vueuse/head'
import { useOnline } from '@vueuse/core'
const { notify } = useNotification();
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
    loadingState: false,
    comfirmpassword: false,
    errorpassword: false,
    errorcurrentpassword: false,
    form: {
        currentPassword: '',
        password: '',
        comfirmpassword: '',

    },
});


const props = defineProps({
    updatepassword: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['update:updatepassword'])

const resetErrors = () => {

    state.errorpassword = false;
    state.errorcurrentpassword = false;
    state.comfirmpassword = false;
};
const onInput = () => {
    resetErrors();
};


const handleChange = () => {
    console.log('ggggggg')
}

const cancell = () => {
    emit('update:updatepassword', !props.updatepassword)
    console.log('uuuuuu');
}

const resetPassword = async () => {
    console.log('hhhhhhhhh');
    state.loadingState = true;
    if (!state.form.currentPassword) {
        state.errorcurrentpassword = true
        state.loadingState = false;
    } else if (!state.form.password || state.form.password.length <= 6) {
        state.errorpassword = true;
        state.loadingState = false;
        return false;
    } else if (state.form.comfirmpassword !== state.form.password) {
        state.comfirmpassword = true;
        state.loadingState = false;
        return false;
    } else {
        try {

            const online = useOnline()
            if (!online.value) {
                notify({
                    title: "No Internet Connection",
                    text: "Please check your internet connection and try again.",
                });
                state.loadingState = false;
                throw new Error("No internet connection");
            }
            const response = await fetch('https://api.abaniseedu.com/resetpassword', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    currentpassword: state.form.currentPassword,
                    newPassword: state.form.password,
                })

            })

            if (!response.ok) {
                const errorData = await response.json();
                notify({
                    title: "error",
                    text: errorData.message,
                });
                state.erromessage = errorData.message;
                state.loadingState = false;
                throw new Error(errorData.message);

            }
            state.loadingState = true
            const data = await response.json();
            state.erromessage = ''
            state.message = data.success

            notify({
                title: "successful",
                text: data.success,
            });

            setTimeout(() => {
                router.push('/login')
                state.loadingState = false
            }, 10);
        } catch (error) {
            console.log(error)
        }
    }
}
</script>