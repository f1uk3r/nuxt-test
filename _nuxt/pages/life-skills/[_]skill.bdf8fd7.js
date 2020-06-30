(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,r){"use strict";var n={components:{ValidationProvider:r(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,default:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",e._b({attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},"b-field",e.$attrs,!1),[r("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))],1)]}}])})}),[],!1,null,null,null);t.a=component.exports},182:function(e,t,r){"use strict";var n={name:"FormCheckbox",components:{ValidationProvider:r(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationProvider",{attrs:{name:e.$attrs.label,rules:e.rules,vid:e.vid},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("div",{staticClass:"block"},[e._t("default"),e._v(" "),r("p",{staticClass:"has-text-danger"},[e._v("\n      "+e._s(n[0])+"\n    ")])],2)]}}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},183:function(e,t,r){"use strict";var n={name:"FormDropdown",components:{ValidationProvider:r(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,default:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("b-field",e._b({attrs:{type:{"is-danger":n[0],"is-success":o},message:n}},"b-field",e.$attrs,!1),[r("b-select",{model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2)],1)]}}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},189:function(e,t,r){},209:function(e,t,r){"use strict";var n=r(189);r.n(n).a},234:function(e,t,r){"use strict";r.r(t);r(16);var n=r(27),o=r(183),l=r(181),c=r(182),d={name:"QuerySkillsForm",components:{ValidationObserver:n.a,FormDropdown:o.a,FormInput:l.a,FormCheckbox:c.a},data:function(){return{step:0,form:{fees:1e3,category:"Hobbies and Life Skills",standard:this.$route.params.skill,subjects:[],level:"",type_coaching:"",travel:"",coaching_location:"",days:[],gender_preference:"",location:"",address:"",landmark:"",name:"",age:null,contact:"",email:"",comment:""},daysRaw:"",typeCoachingArray:[{value:"batch",text:"In a Batch"},{value:"1-on-1",text:"1-on-1 Sessions"},{value:"flexible",text:"Flexible to get best tutor"}],travelArray:[{value:"0-1",text:"0-1 Km"},{value:"0-3",text:"0-3 Km"},{value:"0-5",text:"0-5 Km"},{value:"more than 5",text:"More than 5 Km"}],coachingLocationArray:[{value:"at home",text:"At Home"},{value:"at tutor",text:"At Tutor's Location"},{value:"flexible",text:"Flexible to get best tutor"}],genderPreferenceArray:[{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"none",text:"No preference"}],daysArray:[{value:"5",text:"5 days a week (Weekdays)"},{value:"6",text:"6 days a week (Weekdays + Saturday)"},{value:"7",text:"7 days a week (Everyday)"},{value:"3-1",text:"3 days a week I (Monday,Wednesday,Friday)"},{value:"3-2",text:"3 days a week II (Tuesday,Thursday,Saturday)"},{value:"2",text:"Weekends (Sunday and Saturday)"},{value:"custom",text:"Custom"}],customDaysArray:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],levelArray:[{value:"beginner",text:"Beginner"},{value:"intermediate",text:"Intermediate"},{value:"advanced",text:"Advanced"}],computerBasicsSubjects:["Basic Computer Skill","Basic Web Designing","Learn Tally","Microsoft Office","Essential Computer Skills"],languageSubjects:["English","French","Italian","Spanish","German","Bengali","Gujarati"],speakEnglishSubjects:["Improve Public Speaking","Spoken English","English for Everyone"]}},computed:{locationMessage:function(){return""===this.form.location?"This field is required":null},subjectListFinal:function(){return"computer-basics"===this.form.standard?this.computerBasicsSubjects:"learn-language"===this.form.standard?this.languageSubjects:"speaking-english"===this.form.standard?this.speakEnglishSubjects:null},subjectQuestionFinal:function(){return"computer-basics"===this.form.standard?"Which of the following Computer Skill(s) do you need help with?":"learn-language"===this.form.standard?"Which of the following language(s) do you need help with?":"speaking-english"===this.form.standard?"Which of the following do you need help with?":null}},watch:{daysRaw:function(e){"5"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday"]:"6"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]:"7"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]:"3-1"===e?this.form.days=["Monday","Wednesday","Friday"]:"3-2"===e?this.form.days=["Tuesday","Thursday","Saturday"]:"2"===e&&(this.form.days=["Saturday","Sunday"])}},mounted:function(){var e=this;this.autocomplete=new google.maps.places.Autocomplete(this.$refs.searchTextField,{types:["geocode"]}),this.autocomplete.addListener("place_changed",(function(){var t=e.autocomplete.getPlace();e.form.location=t.formatted_address}))},methods:{onNext:function(){var e=this;0===this.step?(this.$refs.subjectSection.validate(),0!==this.form.subjects.length&&this.step++):1===this.step?this.$refs.preferenceSection.validate().then((function(t){t&&e.form.days!==[]&&e.step++})):2===this.step?this.$refs.typeSection.validate().then((function(t){t&&e.step++})):3===this.step&&this.$refs.informationSection.validate().then((function(t){t&&e.step++}))},onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&""!==e.form.location&&e.addQuery()}))},emptyCoachingLocation:function(){this.form.coaching_location=""},emptyTravel:function(){this.form.travel=""},addQuery:function(){this.$axios.$post("/hobby-query/",{fees:this.form.fees,category:this.form.category,standard:this.form.standard,subjects:this.form.subjects,level:this.form.level,type_coaching:this.form.type_coaching,travel:this.form.travel,coaching_location:this.form.coaching_location,days:this.form.days,gender_preference:this.form.gender_preference,location:this.form.location,address:this.form.address,landmark:this.form.landmark,name:this.form.name,age:parseInt(this.form.age),contact:this.form.contact,email:this.form.email,comment:this.form.comment}).then(this.resetData()).catch((function(e){console.log(e)}))},resetData:function(){this.$refs.form.reset(),this.step++}}},f=(r(209),r(15)),m={components:{QuerySkillsForm:Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hobbies-form"},[r("div",{staticClass:"relative-container"},[r("div",{staticClass:"whole-form"},[r("ValidationObserver",{ref:"form"},[r("form",{attrs:{action:"post"}},[r("b-steps",{scopedSlots:e._u([{key:"navigation",fn:function(t){var n=t.previous,o=t.next;return[r("div",{staticClass:"field is-grouped"},[5!==e.step?r("b-button",{attrs:{outlined:"",type:"is-info","icon-pack":"fas","icon-left":"backward",disabled:n.disabled},on:{click:function(e){return e.preventDefault(),n.action(e)}}},[e._v("\n                  Previous\n                ")]):e._e(),e._v(" "),e.step<4?r("b-button",{attrs:{outlined:"",type:"is-info","icon-pack":"fas","icon-right":"forward",disabled:o.disabled},on:{click:function(t){return t.preventDefault(),e.onNext(t)}}},[e._v("\n                  Next\n                ")]):e._e(),e._v(" "),4===e.step?r("b-button",{attrs:{outlined:"",type:"is-success","icon-pack":"fas","icon-right":"check-circle"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("\n                  Submit\n                ")]):e._e()],1)]}}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("b-step-item",{attrs:{icon:"check-square",label:"Subject"}},[r("ValidationObserver",{ref:"subjectSection"},[r("div",{staticClass:"field"},[r("p",{staticClass:"has-text-left is-size-4"},[e._v("\n                    "+e._s(e.subjectQuestionFinal)+"\n                  ")]),e._v(" "),0===e.form.subjects.length?r("div",{staticClass:"field"},[r("b-tag",{attrs:{type:"is-danger"}},[r("b-icon",{attrs:{"icon-pack":"fas",icon:"times-circle"}}),e._v("\n                      Choose atleast one subject\n                    ")],1)],1):e._e(),e._v(" "),r("form-checkbox",{attrs:{rules:"required",label:"Subject"}},[e._l(e.subjectListFinal,(function(t,i){return[r("b-checkbox",{key:i+"-"+t,attrs:{"native-value":t,size:"is-medium"},model:{value:e.form.subjects,callback:function(t){e.$set(e.form,"subjects",t)},expression:"form.subjects"}},[e._v("\n                        "+e._s(t)+"\n                      ")]),e._v(" "),r("br",{key:i+"-"+t.id})]}))],2)],1)])],1),e._v(" "),r("b-step-item",{attrs:{icon:"calendar-alt",label:"Preference"}},[r("ValidationObserver",{ref:"preferenceSection"},[r("form-dropdown",{attrs:{label:"Your current Knowledge/Skill level.",rules:"required"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[r("option",{attrs:{value:""}},[e._v("Select a level")]),e._v(" "),e._l(e.levelArray,(function(t,i){return r("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2),e._v(" "),r("form-dropdown",{ref:"genderPreference",attrs:{label:"Do student have a gender preference for the tutor?",rules:"required"},model:{value:e.form.gender_preference,callback:function(t){e.$set(e.form,"gender_preference",t)},expression:"form.gender_preference"}},[r("option",{attrs:{value:""}},[e._v("Select an option")]),e._v(" "),e._l(e.genderPreferenceArray,(function(t,i){return r("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2),e._v(" "),r("div",{staticClass:"field"},[r("p",{staticClass:"has-text-left is-size-4"},[e._v("\n                    Which of the days would you prefer to take the classes?\n                  ")]),e._v(" "),0===e.form.days.length?r("div",{staticClass:"field"},[r("b-tag",{attrs:{type:"is-danger"}},[r("b-icon",{attrs:{"icon-pack":"fas",icon:"times-circle"}}),e._v("\n                      Choose one of the options\n                    ")],1)],1):e._e(),e._v(" "),r("form-checkbox",{attrs:{rules:"required",label:"daysRaw"}},[e._l(e.daysArray,(function(t,i){return[r("b-radio",{key:i+"-"+t.value,attrs:{"native-value":t.value,size:"is-medium"},model:{value:e.daysRaw,callback:function(t){e.daysRaw=t},expression:"daysRaw"}},[e._v("\n                        "+e._s(t.text)+"\n                      ")]),e._v(" "),r("br",{key:i+"-"+t.id})]}))],2)],1),e._v(" "),"custom"===e.daysRaw?r("div",{staticClass:"field"},[r("form-checkbox",{attrs:{rules:"required",label:"Days"}},[e._l(e.customDaysArray,(function(t,i){return[r("b-checkbox",{key:i+"-"+t,attrs:{"native-value":t,size:"is-medium"},model:{value:e.form.days,callback:function(t){e.$set(e.form,"days",t)},expression:"form.days"}},[e._v("\n                        "+e._s(t)+"\n                      ")]),e._v(" "),r("br",{key:i+"-"+t.id})]}))],2)],1):e._e()],1)],1),e._v(" "),r("b-step-item",{attrs:{icon:"home",label:"Coaching Location"}},[r("ValidationObserver",{ref:"typeSection"},["guitar"===e.form.standard||"vocal"===e.form.standard||"indian-instrument"===e.form.standard||"western-instrument"===e.form.standard||"learn-language"===e.form.standard?r("form-dropdown",{attrs:{label:"",rules:"required"},model:{value:e.form.type_coaching,callback:function(t){e.$set(e.form,"type_coaching",t)},expression:"form.type_coaching"}},[r("option",{attrs:{value:""}},[e._v("Select a type")]),e._v(" "),e._l(e.typeCoachingArray,(function(t,i){return r("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e(),e._v(" "),"batch"!==e.form.type_coaching?r("form-dropdown",{attrs:{label:"Where would you prefer taking the classes?",rules:"required"},model:{value:e.form.coaching_location,callback:function(t){e.$set(e.form,"coaching_location",t)},expression:"form.coaching_location"}},[r("option",{attrs:{value:""}},[e._v("Select a location")]),e._v(" "),e._l(e.coachingLocationArray,(function(t,i){return r("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e(),e._v(" "),"at home"!==e.form.coaching_location?r("form-dropdown",{attrs:{label:"How far is it comfortable for you to travel?",rules:"required"},model:{value:e.form.travel,callback:function(t){e.$set(e.form,"travel",t)},expression:"form.travel"}},[r("option",{attrs:{value:""}},[e._v("Select a distance range")]),e._v(" "),e._l(e.travelArray,(function(t,i){return r("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e()],1)],1),e._v(" "),r("b-step-item",{attrs:{icon:"id-card",label:"Personal Information"}},[r("ValidationObserver",{ref:"informationSection"},[r("form-input",{key:"name",attrs:{vid:"name",type:"text",label:"Name",rules:"required",placeholder:"Enter your name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("form-input",{key:"contact",attrs:{vid:"contact",type:"tel",label:"Contact(Mobile) Number",rules:"required|digits:10",placeholder:"Please enter 10 digit mobile number"},model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}}),e._v(" "),r("form-input",{key:"email",attrs:{vid:"email",type:"email",label:"E-mail",rules:"required|email",placeholder:"E-mail"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("form-input",{key:"age",attrs:{vid:"contact",type:"tel",label:"Age of the student",rules:"required|integer",placeholder:"Age of student"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),e._v(" "),r("b-step-item",{attrs:{icon:"location-arrow",label:"Location"}},[r("ValidationObserver",{ref:"locationSection"},[r("b-field",{key:"location",attrs:{type:{"is-danger":""===e.form.location,"is-success":""!==e.form.location},message:e.locationMessage}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.location,expression:"form.location"}],ref:"searchTextField",staticClass:"input",class:{"is-danger":""===e.form.location,"is-success":""!==e.form.location},attrs:{type:"text",placeholder:"eg Heerapura"},domProps:{value:e.form.location},on:{input:function(t){t.target.composing||e.$set(e.form,"location",t.target.value)}}})]),e._v(" "),r("form-input",{key:"address",attrs:{vid:"address",type:"textarea",label:"Address",rules:"required",placeholder:"Enter your postal address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),r("form-input",{key:"landmark",attrs:{vid:"landmark",type:"text",label:"Landmark",rules:"required",placeholder:"Enter your Landmark"},model:{value:e.form.landmark,callback:function(t){e.$set(e.form,"landmark",t)},expression:"form.landmark"}}),e._v(" "),r("form-input",{key:"comment",attrs:{vid:"comment",type:"textarea",label:"Anything else you would like to share with us?",rules:"required",placeholder:"Comment here"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1)],1),e._v(" "),r("b-step-item",{attrs:{icon:"thumbs-up",label:"Thank You"}},[r("h1",[e._v("That's all, thank you!")]),e._v(" "),r("span",{staticStyle:{"font-size":"60px",color:"#3273dc"}},[r("i",{staticClass:"fas fa-check-circle"})]),e._v(" "),r("p",[e._v("Our team will try to contact you as soon as possible!")]),e._v(" "),r("p",[e._v("Got a minute? Show us some love!")]),e._v(" "),r("p",[e._v("Follow us on "),r("a",{attrs:{href:"https://twitter.com/edhusk_com"}},[e._v("Twitter")]),e._v(" and like us on "),r("a",{attrs:{href:"https://www.facebook.com/edhuskindia/"}},[e._v("Facebook")]),e._v(".")])])],1)],1)])],1)])])}),[],!1,null,null,null).exports},validate:function(e){var t=e.params;return/^computer-basics$|^learn-language$|^speaking-english$/.test(t.skill)}},v=Object(f.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("query-skills-form")}),[],!1,null,null,null);t.default=v.exports}}]);