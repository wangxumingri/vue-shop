import Vue from 'vue'
import { Button ,Form,FormItem,Input,Message,MessageBox } from 'element-ui'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

// 在Vue中设置一个$message原型，引用element ui的Message组件
Vue.prototype.$message = Message;
// 在Vue中设置一个$confirm原型，引用element ui的MessageBox组件
Vue.prototype.$confirm = MessageBox.confirm;
