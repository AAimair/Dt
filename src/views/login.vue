<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item label="用户名" prop="user" style="width:300px">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="pass" style="width:300px">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="width:300px">
        <el-button @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        user: ""
      }
    };
  },
  methods: {
    submitForm() {
      if (this.ruleForm.user == "admin" && this.ruleForm.pass == "admin") {
        sessionStorage.setItem("user", this.ruleForm.user);
        this.$emit("changeShow", true);
        this.$router.push("/Melliodas");
      } else {
        this.$message({
          showClose: true,
          message: "用户名或者密码错误",
          type: "error"
        });
      }
    },
    resetForm(formName) {}
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;

  .demo-ruleForm {
    border: 1px #ccc solid;
    border-radius: 8px;

    text-align: center;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("http://img2.imgtn.bdimg.com/it/u=1087403940,572950526&fm=26&gp=0.jpg")
      no-repeat top left 100%;
  }
}
</style>