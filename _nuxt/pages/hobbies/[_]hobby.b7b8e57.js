(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(e,t,n){"use strict";var r={components:{ValidationProvider:n(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,default:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},o=n(15),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("b-field",e._b({attrs:{type:{"is-danger":r[0],"is-success":o},message:r}},"b-field",e.$attrs,!1),[n("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))],1)]}}])})}),[],!1,null,null,null);t.a=component.exports},188:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},189:function(e,t,n){e.exports=n.p+"img/form-academics.ae3574f.jpg"},190:function(e,t,n){"use strict";var r={name:"FormCheckbox",components:{ValidationProvider:n(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""}}},o=n(15),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{name:e.$attrs.label,rules:e.rules,vid:e.vid},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("div",{staticClass:"block"},[e._t("default"),e._v(" "),n("p",{staticClass:"has-text-danger"},[e._v("\n      "+e._s(r[0])+"\n    ")])],2)]}}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},191:function(e,t,n){"use strict";var r={name:"FormDropdown",components:{ValidationProvider:n(27).b},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,default:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},o=n(15),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("b-field",e._b({attrs:{type:{"is-danger":r[0],"is-success":o},message:r}},"b-field",e.$attrs,!1),[n("b-select",{model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2)],1)]}}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},196:function(e,t,n){var content=n(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("c4508f48",content,!0,{sourceMap:!1})},220:function(e,t,n){"use strict";var r=n(196);n.n(r).a},221:function(e,t,n){var r=n(52),o=n(188),l=n(189);t=r(!1);var c=o(l);t.push([e.i,"div.relative-container{background-image:url("+c+");position:absolute;background-size:100% 100%;top:0;right:0;bottom:0;left:0;z-index:100}div.whole-form{position:absolute;top:15%;left:10%;width:80%;height:80%;background-color:#fff;border-radius:5px}form{padding:10px;overflow-y:scroll;height:85%}div.progress-wrapper{padding:10px 10px 0}form>div.form-field>div.field>p{padding-bottom:15px}div.field.is-grouped{position:absolute;bottom:5px;padding:10px 10px 0}div.field.is-grouped>button.button{margin:5px}",""]),e.exports=t},249:function(e,t,n){"use strict";n.r(t);n(16);var r=n(27),o=n(191),l=n(187),c=n(190),d={name:"QueryHobbiesForm",components:{ValidationObserver:r.a,FormDropdown:o.a,FormInput:l.a,FormCheckbox:c.a},data:function(){return{step:0,form:{fees:1e3,category:"Hobbies and Life Skills",standard:this.$route.params.hobby,subjects:[],level:"",type_coaching:"",travel:"",coaching_location:"",days:[],gender_preference:"",location:"",address:"",landmark:"",name:"",age:null,contact:"",email:"",comment:""},daysRaw:"",typeCoachingArray:[{value:"batch",text:"In a Batch"},{value:"1-on-1",text:"1-on-1 Sessions"},{value:"flexible",text:"Flexible to get best tutor"}],travelArray:[{value:"0-1",text:"0-1 Km"},{value:"0-3",text:"0-3 Km"},{value:"0-5",text:"0-5 Km"},{value:"more than 5",text:"More than 5 Km"}],coachingLocationArray:[{value:"at home",text:"At Home"},{value:"at tutor",text:"At Tutor's Location"},{value:"flexible",text:"Flexible to get best tutor"}],genderPreferenceArray:[{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"none",text:"No preference"}],daysArray:[{value:"5",text:"5 days a week (Weekdays)"},{value:"6",text:"6 days a week (Weekdays + Saturday)"},{value:"7",text:"7 days a week (Everyday)"},{value:"3-1",text:"3 days a week I (Monday,Wednesday,Friday)"},{value:"3-2",text:"3 days a week II (Tuesday,Thursday,Saturday)"},{value:"2",text:"Weekends (Sunday and Saturday)"},{value:"custom",text:"Custom"}],customDaysArray:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],levelArray:[{value:"beginner",text:"Beginner"},{value:"intermediate",text:"Intermediate"},{value:"advanced",text:"Advanced"}],artSubjects:["Art for Kids","Calligraphy","Canvas Painting","Charcoal Painting","Basic Sketching","Oil Painting","Watercolor Painting","Pencil Sketching","Glass Painting","Jewellery Design","Knitting Classes","Mehendi Designing"],classicalDanceSubjects:["Bhangra","Kathak","Bharatnatyam","Ghoomer","Kalbeliya","Other Classical Dances"],cookingSubjects:["Cooking","Baking"],westernDanceSubjects:["Anybody Can Dance","Bollywood Dance","Jazz Dance","Hip Hop","Belly Dance","B-Boying","Contemporary Dance","Wedding Choreography"],guitarSubjects:["Acoustic Guitar","Bass Guitar","Electric Guitar","Not Sure Yet"],indianInstrumentSubjects:["Tabla","Dholak","Harmonium","Veena","Mradanga","Sitar","Bansuri"],vocalSubjects:["Bollywood Vocal","Indian Classical Vocal","Western Vocal"],westerInstrumentSubjects:["Violin","Keyboard","Mouth Organ","Flute","Drums"]}},computed:{locationMessage:function(){return""===this.form.location?"This field is required":null},subjectListFinal:function(){return"art-craft"===this.form.standard?this.artSubjects:"classical-dance"===this.form.standard?this.classicalDanceSubjects:"cooking"===this.form.standard?this.cookingSubjects:"western-dance"===this.form.standard?this.westernDanceSubjects:"guitar"===this.form.standard?this.guitarSubjects:"indian-instrument"===this.form.standard?this.indianInstrumentSubjects:"vocal"===this.form.standard?this.vocalSubjects:"western-instrument"===this.form.standard?this.westerInstrumentSubjects:null},subjectQuestionFinal:function(){return"art-craft"===this.form.standard?"Which of the following Artform(s) do you need help with?":"classical-dance"===this.form.standard?"Which of the following Dance-form(s) do you need help with?":"cooking"===this.form.standard?"Which of the following do you need help with?":"western-dance"===this.form.standard?"Which of the following Dance-form(s) do you need help with?":"guitar"===this.form.standard?"Which of the following Guitar skill(s) do you need help with?":"indian-instrument"===this.form.standard?"Which of the following Instrument(s) do you need help with?":"vocal"===this.form.standard?"Which of the following Singing-form(s) do you need help with?":"western-instrument"===this.form.standard?"Which of the following Instrument(s) do you need help with?":null}},watch:{daysRaw:function(e){"5"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday"]:"6"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]:"7"===e?this.form.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]:"3-1"===e?this.form.days=["Monday","Wednesday","Friday"]:"3-2"===e?this.form.days=["Tuesday","Thursday","Saturday"]:"2"===e&&(this.form.days=["Saturday","Sunday"])}},mounted:function(){var e=this;this.autocomplete=new google.maps.places.Autocomplete(this.$refs.searchTextField,{types:["geocode"]}),this.autocomplete.addListener("place_changed",(function(){var t=e.autocomplete.getPlace();e.form.location=t.formatted_address}))},methods:{onNext:function(){var e=this;0===this.step?(this.$refs.subjectSection.validate(),0!==this.form.subjects.length&&this.step++):1===this.step?this.$refs.preferenceSection.validate().then((function(t){t&&e.form.days!==[]&&e.step++})):2===this.step?this.$refs.typeSection.validate().then((function(t){t&&e.step++})):3===this.step&&this.$refs.informationSection.validate().then((function(t){t&&e.step++}))},onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&""!==e.form.location&&e.addQuery()}))},emptyCoachingLocation:function(){this.form.coaching_location=""},emptyTravel:function(){this.form.travel=""},addQuery:function(){this.$axios.$post("/hobby-query/",{fees:this.form.fees,category:this.form.category,standard:this.form.standard,subjects:this.form.subjects,level:this.form.level,type_coaching:this.form.type_coaching,travel:this.form.travel,coaching_location:this.form.coaching_location,days:this.form.days,gender_preference:this.form.gender_preference,location:this.form.location,address:this.form.address,landmark:this.form.landmark,name:this.form.name,age:parseInt(this.form.age),contact:this.form.contact,email:this.form.email,comment:this.form.comment}).then(this.resetData()).catch((function(e){console.log(e)}))},resetData:function(){this.$refs.form.reset(),this.step++}}},f=(n(220),n(15)),m={components:{QueryHobbiesForm:Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hobbies-form"},[n("div",{staticClass:"relative-container"},[n("div",{staticClass:"whole-form"},[n("ValidationObserver",{ref:"form"},[n("form",{attrs:{action:"post"}},[n("b-steps",{scopedSlots:e._u([{key:"navigation",fn:function(t){var r=t.previous,o=t.next;return[n("div",{staticClass:"field is-grouped"},[5!==e.step?n("b-button",{attrs:{outlined:"",type:"is-info","icon-pack":"fas","icon-left":"backward",disabled:r.disabled},on:{click:function(e){return e.preventDefault(),r.action(e)}}},[e._v("\n                  Previous\n                ")]):e._e(),e._v(" "),e.step<4?n("b-button",{attrs:{outlined:"",type:"is-info","icon-pack":"fas","icon-right":"forward",disabled:o.disabled},on:{click:function(t){return t.preventDefault(),e.onNext(t)}}},[e._v("\n                  Next\n                ")]):e._e(),e._v(" "),4===e.step?n("b-button",{attrs:{outlined:"",type:"is-success","icon-pack":"fas","icon-right":"check-circle"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("\n                  Submit\n                ")]):e._e()],1)]}}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("b-step-item",{attrs:{icon:"check-square",label:"Subject"}},[n("ValidationObserver",{ref:"subjectSection"},[n("div",{staticClass:"field"},[n("p",{staticClass:"has-text-left is-size-4"},[e._v("\n                    "+e._s(e.subjectQuestionFinal)+"\n                  ")]),e._v(" "),0===e.form.subjects.length?n("div",{staticClass:"field"},[n("b-tag",{attrs:{type:"is-danger"}},[n("b-icon",{attrs:{"icon-pack":"fas",icon:"times-circle"}}),e._v("\n                      Choose atleast one subject\n                    ")],1)],1):e._e(),e._v(" "),n("form-checkbox",{attrs:{rules:"required",label:"Subject"}},[e._l(e.subjectListFinal,(function(t,i){return[n("b-checkbox",{key:i+"-"+t,attrs:{"native-value":t,size:"is-medium"},model:{value:e.form.subjects,callback:function(t){e.$set(e.form,"subjects",t)},expression:"form.subjects"}},[e._v("\n                        "+e._s(t)+"\n                      ")]),e._v(" "),n("br",{key:i+"-"+t.id})]}))],2)],1)])],1),e._v(" "),n("b-step-item",{attrs:{icon:"calendar-alt",label:"Preference"}},[n("ValidationObserver",{ref:"preferenceSection"},["guitar"===e.form.standard||"vocal"===e.form.standard||"indian-instrument"===e.form.standard||"western-instrument"===e.form.standard||"learn-language"===e.form.standard?n("form-dropdown",{attrs:{label:"Your current Knowledge/Skill level.",rules:"required"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[n("option",{attrs:{value:""}},[e._v("Select a level")]),e._v(" "),e._l(e.levelArray,(function(t,i){return n("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e(),e._v(" "),n("form-dropdown",{ref:"genderPreference",attrs:{label:"Do student have a gender preference for the tutor?",rules:"required"},model:{value:e.form.gender_preference,callback:function(t){e.$set(e.form,"gender_preference",t)},expression:"form.gender_preference"}},[n("option",{attrs:{value:""}},[e._v("Select an option")]),e._v(" "),e._l(e.genderPreferenceArray,(function(t,i){return n("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2),e._v(" "),n("div",{staticClass:"field"},[n("p",{staticClass:"has-text-left is-size-4"},[e._v("\n                    Which of the days would you prefer to take the classes?\n                  ")]),e._v(" "),0===e.form.days.length?n("div",{staticClass:"field"},[n("b-tag",{attrs:{type:"is-danger"}},[n("b-icon",{attrs:{"icon-pack":"fas",icon:"times-circle"}}),e._v("\n                      Choose one of the options\n                    ")],1)],1):e._e(),e._v(" "),n("form-checkbox",{attrs:{rules:"required",label:"daysRaw"}},[e._l(e.daysArray,(function(t,i){return[n("b-radio",{key:i+"-"+t.value,attrs:{"native-value":t.value,size:"is-medium"},model:{value:e.daysRaw,callback:function(t){e.daysRaw=t},expression:"daysRaw"}},[e._v("\n                        "+e._s(t.text)+"\n                      ")]),e._v(" "),n("br",{key:i+"-"+t.id})]}))],2)],1),e._v(" "),"custom"===e.daysRaw?n("div",{staticClass:"field"},[n("form-checkbox",{attrs:{rules:"required",label:"Days"}},[e._l(e.customDaysArray,(function(t,i){return[n("b-checkbox",{key:i+"-"+t,attrs:{"native-value":t,size:"is-medium"},model:{value:e.form.days,callback:function(t){e.$set(e.form,"days",t)},expression:"form.days"}},[e._v("\n                        "+e._s(t)+"\n                      ")]),e._v(" "),n("br",{key:i+"-"+t.id})]}))],2)],1):e._e()],1)],1),e._v(" "),n("b-step-item",{attrs:{icon:"home",label:"Coaching Location"}},[n("ValidationObserver",{ref:"typeSection"},["guitar"===e.form.standard||"vocal"===e.form.standard||"indian-instrument"===e.form.standard||"western-instrument"===e.form.standard||"learn-language"===e.form.standard?n("form-dropdown",{attrs:{label:"",rules:"required"},model:{value:e.form.type_coaching,callback:function(t){e.$set(e.form,"type_coaching",t)},expression:"form.type_coaching"}},[n("option",{attrs:{value:""}},[e._v("Select a type")]),e._v(" "),e._l(e.typeCoachingArray,(function(t,i){return n("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e(),e._v(" "),"batch"!==e.form.type_coaching?n("form-dropdown",{attrs:{label:"Where would you prefer taking the classes?",rules:"required"},model:{value:e.form.coaching_location,callback:function(t){e.$set(e.form,"coaching_location",t)},expression:"form.coaching_location"}},[n("option",{attrs:{value:""}},[e._v("Select a location")]),e._v(" "),e._l(e.coachingLocationArray,(function(t,i){return n("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e(),e._v(" "),"at home"!==e.form.coaching_location?n("form-dropdown",{attrs:{label:"How far is it comfortable for you to travel?",rules:"required"},model:{value:e.form.travel,callback:function(t){e.$set(e.form,"travel",t)},expression:"form.travel"}},[n("option",{attrs:{value:""}},[e._v("Select a distance range")]),e._v(" "),e._l(e.travelArray,(function(t,i){return n("option",{key:t.value+"-"+i,domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])}))],2):e._e()],1)],1),e._v(" "),n("b-step-item",{attrs:{icon:"id-card",label:"Personal Information"}},[n("ValidationObserver",{ref:"informationSection"},[n("form-input",{key:"name",attrs:{vid:"name",type:"text",label:"Name",rules:"required",placeholder:"Enter your name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("form-input",{key:"contact",attrs:{vid:"contact",type:"tel",label:"Contact(Mobile) Number",rules:"required|digits:10",placeholder:"Please enter 10 digit mobile number"},model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}}),e._v(" "),n("form-input",{key:"email",attrs:{vid:"email",type:"email",label:"E-mail",rules:"required|email",placeholder:"E-mail"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("form-input",{key:"age",attrs:{vid:"contact",type:"tel",label:"Age of the student",rules:"required|integer",placeholder:"Age of student"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),e._v(" "),n("b-step-item",{attrs:{icon:"location-arrow",label:"Location"}},[n("ValidationObserver",{ref:"locationSection"},[n("b-field",{key:"location",attrs:{type:{"is-danger":""===e.form.location,"is-success":""!==e.form.location},message:e.locationMessage}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.location,expression:"form.location"}],ref:"searchTextField",staticClass:"input",class:{"is-danger":""===e.form.location,"is-success":""!==e.form.location},attrs:{type:"text",placeholder:"eg Heerapura"},domProps:{value:e.form.location},on:{input:function(t){t.target.composing||e.$set(e.form,"location",t.target.value)}}})]),e._v(" "),n("form-input",{key:"address",attrs:{vid:"address",type:"textarea",label:"Address",rules:"required",placeholder:"Enter your postal address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),n("form-input",{key:"landmark",attrs:{vid:"landmark",type:"text",label:"Landmark",rules:"required",placeholder:"Enter your Landmark"},model:{value:e.form.landmark,callback:function(t){e.$set(e.form,"landmark",t)},expression:"form.landmark"}}),e._v(" "),n("form-input",{key:"comment",attrs:{vid:"comment",type:"textarea",label:"Anything else you would like to share with us?",rules:"required",placeholder:"Comment here"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1)],1),e._v(" "),n("b-step-item",{attrs:{icon:"thumbs-up",label:"Thank You"}},[n("h1",[e._v("That's all, thank you!")]),e._v(" "),n("span",{staticStyle:{"font-size":"60px",color:"#3273dc"}},[n("i",{staticClass:"fas fa-check-circle"})]),e._v(" "),n("p",[e._v("Our team will try to contact you as soon as possible!")]),e._v(" "),n("p",[e._v("Got a minute? Show us some love!")]),e._v(" "),n("p",[e._v("Follow us on "),n("a",{attrs:{href:"https://twitter.com/edhusk_com"}},[e._v("Twitter")]),e._v(" and like us on "),n("a",{attrs:{href:"https://www.facebook.com/edhuskindia/"}},[e._v("Facebook")]),e._v(".")])])],1)],1)])],1)])])}),[],!1,null,null,null).exports},validate:function(e){var t=e.params;return/^art-craft$|^classical-dance$|^cooking$|^western-dance$|^guitar$|^indian-instrument$|^vocal$|^western-instrument$/.test(t.hobby)}},h=Object(f.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("query-hobbies-form")}),[],!1,null,null,null);t.default=h.exports}}]);