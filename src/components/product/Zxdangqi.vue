<template>

  <el-dialog title="咨询档期" :visible.sync="dialogFormVisible">
    <div class="dialog-left">
      <div class="zximgbox">
        <img :src="imgs" width="100%">
      </div>
      <div class="zxjieshao">
        <p class="zxdm">厦门薇漫一婚纱摄影</p>
        <p class="zxidzhi"><span>地址</span><strong>[思明区] 黄厝溪头下三个厦大人遇书房2楼</strong></p>
      </div>
      <p class="cg">
        预订成功包单程机票+全新新娘定制婚纱一套
      </p>
    </div>
    <div class="fenge"></div>
    <el-form :model="form">
      <el-form-item label="姓    名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>

      <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button :plain="true" type="danger" @click="opens()">确 定 咨 询</el-button>
    </div>
  </el-dialog>

</template>
<script>
  export default {
    data() {
      return {
        imgs: require('../../assets/5.jpg'),
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          phone: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px'

      }
    },
    methods: {
      parentMsg: function (dialogFormVisible) {
        if (this.form.delivery == false) {
          this.dialogFormVisible = dialogFormVisible
        } else {
          this.dialogFormVisible = false;
          this.$message({
            message: '抱歉！你已经预约成功了！请你稍后片刻！',
            type: 'warning'
          });
        }
      },
      opens() {


        if (this.form.name != "" && this.form.phone != "") {
          this.dialogFormVisible = false;
          this.form.delivery = true

          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        } else if (this.form.name == "") {
          this.dialogFormVisible = true;
          this.$message.error('姓名不能为空！');
        } else {
          this.dialogFormVisible = true;
          this.$message.error('手机号码不能为空！');
        }

      }
    }
  }

</script>
<style>
.el-dialog{
  width: 40%
}
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }

  .el-dialog__header {
    background: #000000;
  }

  .el-dialog__header span {
    display: block;
    width: 100%;
    color: #fff;
    text-align: center
  }

  .dialog-left {
    float: left;
    width: 48%;
  }

  .el-form {
    width: 45%;
    float: left;
  }

  .el-dialog__footer {
    width: 100%;
    float: right;
  }

  .el-dialog {
    display: flow-root;
  }

  .zximgbox {
    width: 42%;
    margin: 10px;
    float: left;
  }

  .zxjieshao {
    float: left;
    width: 48%;
    margin-left: 10px;
  }

  .zxidzhi {
    font-size: 12px;
    color: #999;
    float: left;

  }

  .fenge {
    background: #999;
    width: 2px;
    height: 180px;
    float: left;
    margin: 10px;
  }

  .cg {
    width: 100%;
    float: left;
    color: #ff4163;

  }

</style>
