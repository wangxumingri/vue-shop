import Vue from 'vue'
import
{
    Button, Form, FormItem, Col,Input, Message, MessageBox, Select,Checkbox,Option,Radio,CheckboxGroup,
    Switch,DatePicker,TimePicker,RadioGroup, Table,
    TableColumn,

}

from 'element-ui'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(Input);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Option);
Vue.use(Radio);
Vue.use(CheckboxGroup);
Vue.use(Switch);

Vue.use(DatePicker);
// Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(RadioGroup);
Vue.use(Table);
Vue.use(TableColumn);



// 在Vue中设置一个$message原型，引用element ui的Message组件
Vue.prototype.$message = Message;
// 在Vue中设置一个$confirm原型，引用element ui的MessageBox组件
Vue.prototype.$confirm = MessageBox.confirm;
