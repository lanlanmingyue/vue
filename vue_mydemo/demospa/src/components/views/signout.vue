<style scoped>
	.btn {
		padding: 50px;
		text-align: center;
		button {
			padding: 5px 10px;
		}
	}
</style>
<template>
	<div>
		<router-link slot="left" to="/home">返回</router-link>
		<div class="btn">
			<button v-on:click="submit">确认退出</button>
		</div>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
		   computed: {
		    ...mapActions([
		      'userSignout'
		    ])
		  },
        methods: {
            submit() {
            	this.$store.dispatch('userSignout');
				this.$router.replace({ path: '/login' })
            }
        }
    }
</script>