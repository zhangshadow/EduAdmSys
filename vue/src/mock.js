import Mock from 'mockjs'
const Random = Mock.Random
const vcode ="1234"
const userInfo = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:2,
        msg:"登录成功",
        datas:{
            userid: "2017110323",
            username:"lqf",
        }
    }
}
const loginAdmin = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:{
            userid:20171112,
            username:'小明',
            superAdmin:1,
            dept:''
        }
    }  
}
const getAdminTableData = function(){
    return{
        code:1,
        datas:[{
            userid:20171112,
            name:'张老师',
            dept:'计算机科学学院',
            tel:'18012344321',
            superAdmin:1,
        },{
            userid:20171112,
            name:'李老师',
            dept:'计算机科学学院',
            tel:'18012344321',
            superAdmin:2,
        },{
            userid:20171112,
            name:'张老师',
            dept:'计算机科学学院',
            tel:'18012344321',
            superAdmin:2,
        },{
            userid:20171112,
            name:'王老师',
            dept:'计算机科学学院',
            tel:'18012344321',
            superAdmin:1,
        }]
    }  
}

const getTelCode = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
    }  
}
const getInfoTable = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            sid:'2017110323',
            name:'小明',
            sex:'女',
            birth:'1999-10-10',
            politic:'共产党员',
            class:'1103',
            state: '在校',
            all_credit:'161',
            avg_grade:'81.68'
        }]
        
    }  
}
const getTermTable = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            week: "Tues",
		    time: 1,
		    info: "数据库原理 \n 刘老师/教学楼A-110/1-14周(单周)"
        },{
            week: "Wed",
		    time: 4,
		    info: "JavaWeb \n 李老师/教学楼A-210 /1-14周"
        }]
    }
}

const getRoomTable = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            week: "Tues",
		    time: 1,
		    info: "数据库原理 \n 刘老师/xxx /1-14周(单周)"
        },{
            week: "Wed",
		    time: 4,
		    info: "JavaWeb \n 李老师 /xxx / 1-14周"
        },{
            week: "Wed",
		    time: 0,
		    info: "Java程序设计 \n 李老师 / xxx / 1-14周"
        },{
            week: "Thur",
		    time: 3,
		    info: "数据结构 \n 李老师 / xxx / 1-14周"
        },{
            week: "Mon",
		    time: 6,
		    info: "形式政策 \n 李老师 / xxx / 1-14周"
        }]
    }
}

const getStuGradeTable = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        },{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        },{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        },{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        },{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        },{
            number:'1112',
            type:'专业必修课',
            credir:'4',
            hours:'64',
            coursename:'数据结构',
            grade:'80'
        }]
    }
}

const getSelectCrs = function(){
    let data1 = [{
        number:'1211',
        type:'专业选修课',
        coursename:'计算机网络',
        credit:'4',
        hours:'64',
        spot:'101',
        teacher:'张帆',
        rate:'31/50'
        },{
        number:'1212',
        type:'专业选修课',
        coursename:'网络工程',
        credit:'4',
        hours:'64',
        spot:'104',
        teacher:'李媛',
        rate:'32/50'
        },{
        number:'1213',
        type:'专业选修课',
        coursename:'数据结构',
        credit:'4',
        hours:'64',
        spot:'105',
        teacher:'凡凡',
        rate:'31/50'
        },{
        number:'1214',
        type:'专业选修课',
        coursename:'传感器',
        credit:'1',
        hours:'16',
        spot:'102',
        teacher:'伯伯',
        rate:'31/50'
        },{
        number:'1215',
        type:'通识选修课',
        coursename:'食品卫生',
        credit:'2',
        hours:'32',
        spot:'105',
        teacher:'张燕',
        rate:'11/50'
        },{
        number:'1216',
        type:'通识选修课',
        coursename:'中国诗词',
        credit:'2',
        hours:'32',
        spot:'108',
        teacher:'撒贝宁',
        rate:'32/50'
        },{
        number:'1217',
        type:'通识选修课',
        coursename:'大学英语',
        credit:'4',
        hours:'64',
        spot:'106',
        teacher:'黄岩',
        rate:'38/60'
        },{
        number:'1218',
        type:'通识必修课',
        coursename:'计算机网络',
        credit:'4',
        hours:'64',
        spot:'101',
        teacher:'冯豆子',
        rate:'23/50'
        },{
        number:'1219',
        type:'通识必修课',
        coursename:'形势与政策',
        credit:'1',
        hours:'16',
        spot:'111',
        teacher:'张帆',
        rate:'31/50'
        },{
        number:'1220',
        type:'通识必修课',
        coursename:'大学语文',
        credit:'3',
        hours:'48',
        spot:'110',
        teacher:'潘仔',
        rate:'31/60'
        },{
        number:'1221',
        type:'专业必修课',
        coursename:'安卓开发',
        credit:'4',
        hours:'64',
        spot:'101',
        teacher:'雷么',
        rate:'21/50'
        },{
        number:'1222',
        type:'专业必修课',
        coursename:'网络安全',
        credit:'2',
        hours:'32',
        spot:'111',
        teacher:'李芳',
        rate:'22/60'
        },{
        number:'1223',
        type:'专业必修课',
        coursename:'计算机维护',
        credit:'1',
        hours:'16',
        spot:'101',
        teacher:'张督',
        rate:'51/60'
        },{
        number:'1224',
        type:'专业必修课',
        coursename:'C语言',
        credit:'2',
        hours:'32',
        spot:'105',
        teacher:'非是',
        rate:'35/50'
        },{
        number:'1226',
        type:'专业必修课',
        coursename:'信息工程',
        credit:'4',
        hours:'64',
        spot:'108',
        teacher:'嗷嗷',
        rate:'39/50'
        },{
        number:'1225',
        type:'专业必修课',
        coursename:'软件工程',
        credit:'2',
        hours:'32',
        spot:'103',
        teacher:'利利',
        rate:'31/60'
        },{
        number:'1227',
        type:'专业必修课',
        coursename:'数据库原理',
        credit:'4',
        hours:'64',
        spot:'101',
        teacher:'齐娜',
        rate:'11/50'
        },{
        number:'1225',
        type:'专业必修课',
        coursename:'软件工程',
        credit:'2',
        hours:'32',
        spot:'103',
        teacher:'利利',
        rate:'31/60'
        },{
        number:'1227',
        type:'专业必修课',
        coursename:'数据库原理',
        credit:'4',
        hours:'64',
        spot:'101',
        teacher:'齐娜',
        rate:'11/50'
        }
    ]
    let len=17
    
    // if((page * size)>len){
    //     for(var i = (page-1)*size; i< len;i++){
    //         crs.push(data[i])
    //     }
    // }else{
    //     for(var i = (page-1)*size, j = 0; j<size; j++,i++){
    //         crs.push(data[i])
    //     }
    // }

    return{
        code:1,
        msg:"选课通道已开放，请在1月12日前完成选课",
        datas:{
            len:len,
            crs:data1
        }
        
    }
}
const getTeaInfoTable = function(){
    // const prarmsObj = JSON.parse(prarms.body);
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            tid:'19980213',
            name:'张帆',
            sex:'男',
            tel:'18989892837',
            politic:'共青团员',
            title:'讲师',
            dept:'计算机',
            degree:'硕士',
            work_range:'1998-02-01至今'
        }]
        
    }  
}
const getClassOptions = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            class:0,
            label:'200201',
            crs:[{
                crs:'071101',
                    label:'计算机操作系统',
            },{
                crs:'071105',
                label:'数据库原理',  
            }]
        },{
            class:1,
            label:'200202',
            crs:[]
        },{
            class:2,
            label:'200203',
            crs:[]
        },{
            class:3,
            label:'200204',
            crs:[]
        }]
    }  
}
const getCrsOptions = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:[]
    }  
}
const getClassListTableData = function(){
    return{
        code:1,
        msg:"",
        datas:[{
            number:'2017110301',
            class:'171103',
            name:'李源',
            grade:'80'
        },{
            number:'2017110302',
            class:'171103',
            name:'赛点',
            grade:'11'
        },{
            number:'2017110303',
            class:'171103',
            name:'芳芳',
            grade:'90'
        },{
            number:'2017110304',
            class:'171103',
            name:'潘潘',
            grade:'78'
        },{
            number:'2017110305',
            class:'171103',
            name:'候候',
            grade:'75'
        },{
            number:'2017110306',
            class:'171103',
            name:'丹丹',
            grade:'78'
        },{
            number:'2017110307',
            class:'171103',
            name:'红红',
            grade:'89'
        },{
            number:'2017110308',
            class:'171103',
            name:'欢欢',
            grade:'77'
        },{
            number:'2017020211',
            class:'170202',
            name:'萱萱',
            grade:'12'
        },{
            number:'2017020212',
            class:'170202',
            name:'大大',
            grade:'99'
        },{
            number:'2017020213',
            class:'170202',
            name:'升水',
            grade:'23'
        },{
            number:'2017020214',
            class:'170202',
            name:'琪琪',
            grade:'88'
        },{
            number:'2017020215',
            class:'170202',
            name:'梦梦',
            grade:'66'
        },{
            number:'2017020216',
            class:'170202',
            name:'饭饭',
            grade:'46'
        },{
            number:'2017020217',
            class:'170202',
            name:'拢龙',
            grade:'99'
        },{
            number:'2017120111',
            class:'171201',
            name:'避免',
            grade:''
        },{
            number:'2017120112',
            class:'171201',
            name:'邱隘',
            grade:''
        },{
            number:'2017120113',
            class:'171201',
            name:'星星',
            grade:''
        },{
            number:'2017120114',
            class:'171201',
            name:'秋默',
            grade:''
        },{
            number:'2017120115',
            class:'171201',
            name:'青墨',
            grade:''
        },{
            number:'2017120116',
            class:'171201',
            name:'思议',
            grade:''
        },{
            number:'2017120117',
            class:'171201',
            name:'晨晨',
            grade:''
        },{
            number:'2017120118',
            class:'171201',
            name:'谢雪',
            grade:''
        }]
    }
}

const getTaskTable = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            number:'201101',
            crsname:'计算机网络',
            class:'20171103',
            port:'网络工程专业 \n 周三6-7节（1-16）周 \n 实验室西204   ',
            info:'课程编号：1211 \n 课程类别：专业选修课 \n 学分：4 学时：64',
            docurl:''
        },{
            number:'201102',
            crsname:'数据结构',
            class:'20171104',
            port:'网络工程专业 \n 周二3-4节（1-16）周 \n 教学楼A105   ',
            info:'课程编号：1213 \n 课程类别：专业选修课 \n  学分：4 学时：64',
            docurl:''
        },{
            number:'201101',
            crsname:'计算机网络',
            class:'20171103',
            port:'网络工程专业 \n 周三6-7节（1-16）周 \n 实验室西204   ',
            info:'课程编号：1211 \n 课程类别：专业选修课 \n 学分：4 学时：64',
            docurl:''
        },{
            number:'201102',
            crsname:'数据结构',
            class:'20171104',
            port:'网络工程专业 \n 周二3-4节（1-16）周 \n 教学楼A105   ',
            info:'课程编号：1213 \n 课程类别：专业选修课 \n  学分：4 学时：64',
            docurl:''
        }]
        
    }  
}
const getTeaTableData = function(){
    return{
        code:1,
        datas:{
            len:30,
            tea:[{
                tid:'19980213',
                name:'张帆',
                sex:'m',
                tel:'18989892837',
                politic:'共青团员',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19890211',
                name:'李媛',
                sex:'f',
                tel:'18618273982',
                politic:'共产党员',
                title:'副教授',
                dept:'计算机',
                degree:'硕士',
                work_range:'1989-01-05'
            },{
                tid:'19970203',
                name:'网易',
                sex:'m',
                tel:'13098928291',
                politic:'群众',
                title:'副教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1997-07-05'
            },{
                tid:'19870202',
                name:'贺楠',
                sex:'f',
                tel:'18617827861',
                politic:'共产党员',
                title:'教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1987-07-01'
            },{
                tid:'20000202',
                name:'李远',
                sex:'m',
                tel:'18989892837',
                politic:'共产党员',
                title:'讲师',
                dept:'计算机',
                degree:'博士',
                work_range:'2000-02-01'
            },{
                tid:'19980211',
                name:'雷蕾',
                sex:'f',
                tel:'18989892837',
                politic:'群众',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19980202',
                name:'潘伟',
                sex:'m',
                tel:'18989892837',
                politic:'群众',
                title:'教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1998-02-01'
            },{
                tid:'19980210',
                name:'方进',
                sex:'m',
                tel:'18989892837',
                politic:'其他党派人士',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19980209',
                name:'黄镭',
                sex:'m',
                tel:'18989892837',
                politic:'其他党派人士',
                title:'副教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1998-02-01'
            },{
                tid:'19990201',
                name:'侯吴',
                sex:'m',
                tel:'18989892837',
                politic:'共产党员',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1999-02-01'
            },{
                tid:'20100203',
                name:'张帆',
                sex:'m',
                tel:'18989892837',
                politic:'共青团员',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19870202',
                name:'贺楠',
                sex:'f',
                tel:'18617827861',
                politic:'共产党员',
                title:'教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1987-07-01'
            },{
                tid:'20000202',
                name:'李远',
                sex:'m',
                tel:'18989892837',
                politic:'共产党员',
                title:'讲师',
                dept:'计算机',
                degree:'博士',
                work_range:'2000-02-01'
            },{
                tid:'19980211',
                name:'雷蕾',
                sex:'f',
                tel:'18989892837',
                politic:'群众',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19980202',
                name:'潘伟',
                sex:'m',
                tel:'18989892837',
                politic:'群众',
                title:'教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1998-02-01'
            },{
                tid:'19980210',
                name:'方进',
                sex:'m',
                tel:'18989892837',
                politic:'其他党派人士',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            },{
                tid:'19980209',
                name:'黄镭',
                sex:'m',
                tel:'18989892837',
                politic:'其他党派人士',
                title:'副教授',
                dept:'计算机',
                degree:'博士',
                work_range:'1998-02-01'
            },{
                tid:'19990201',
                name:'侯吴',
                sex:'m',
                tel:'18989892837',
                politic:'共产党员',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1999-02-01'
            },{
                tid:'20100203',
                name:'张帆',
                sex:'m',
                tel:'18989892837',
                politic:'共青团员',
                title:'讲师',
                dept:'计算机',
                degree:'硕士',
                work_range:'1998-02-01'
            }]
        }
    }
}

const getStuTableData = function(){
    return{
        code:1,
        datas:{
            len:30,
            stu:[{
                number:'2017110301',
                name:'李源',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110302',
                name:'赛点',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110303',
                name:'芳芳',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'入党积极分子',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110304',
                name:'潘潘',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'群众',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110305',
                name:'候候',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'共产党员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110306',
                name:'丹丹',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'群众',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110307',
                name:'红红',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017110308',
                name:'欢欢',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171103',
                dept:'计算机科学学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020211',
                name:'萱萱',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'入党积极分子',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020212',
                name:'大大',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'入党积极分子',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020213',
                name:'升水',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020214',
                name:'琪琪',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'入党积极分子',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020215',
                name:'梦梦',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020216',
                name:'饭饭',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'入党积极分子',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017020217',
                name:'拢龙',
                sex:'m',
                birth:'1999-04-16',
                id:'510125199904160111',
                class:'170202',
                dept:'马克思主义学院',
                politic:'共产党员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120111',
                name:'避免',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120112',
                name:'邱隘',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共产党员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120113',
                name:'星星',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共产党员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120114',
                name:'秋默',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120115',
                name:'青墨',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120116',
                name:'思议',
                sex:'m',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'群众',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120117',
                name:'晨晨',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            },{
                number:'2017120118',
                name:'谢雪',
                sex:'f',
                birth:'1999-02-22',
                id:'510125199902220111',
                class:'171201',
                dept:'文学院',
                politic:'共青团员',
                huji:'四川成都',
                graduate:'四川中学',
                tel:'1871678999'
            }]
        }
    }
}

const getCrsTableData = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:{
        len:30,    
        crs:[{
            number:'1211',
            crsname:'计算机网络',
            type:'专业选修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1212',
            crsname:'网络工程',
            type:'专业选修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1213',
            crsname:'数据结构',
            type:'专业选修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1214',
            crsname:'传感器',
            type:'专业选修课',
            dept:'计算机科学学院',
            hours:'16',
            credit:'1'
        },{
            number:'1215',
            crsname:'食品卫生',
            type:'通识选修课',
            dept:'化学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1216',
            crsname:'中国诗词',
            type:'通识选修课',
            dept:'文学院',
            hours:'32',
            credit:'2'
        },{
            number:'1217',
            crsname:'大学英语',
            type:'通识选修课',
            dept:'外国语学院',
            hours:'64',
            credit:'4'
        },{
            number:'1218',
            crsname:'计算机网络',
            type:'通识必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1219',             
            crsname:'形势与政策',
            type:'通识必修课',   
            dept:'马克思主义学院',
            hours:'16',
            credit:'1'
        },{
            number:'1220',
            type:'通识必修课',
            crsname:'大学语文',
            dept:'文学院',
            hours:'48',
            credit:'3'
        },{
            number:'1221',
            crsname:'安卓开发',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1222',
            crsname:'网络安全',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1223',
            crsname:'计算机维护',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'16',
            credit:'1'
        },{
            number:'1224',
            crsname:'C语言',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1226',
            crsname:'信息工程',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1225',
            crsname:'软件工程',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1227',
            crsname:'数据库原理',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1228',
            crsname:'iOS开发',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1226',
            crsname:'信息工程',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1225',
            crsname:'软件工程',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        },{
            number:'1227',
            crsname:'数据库原理',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'64',
            credit:'4'
        },{
            number:'1228',
            crsname:'iOS开发',
            type:'专业必修课',
            dept:'计算机科学学院',
            hours:'32',
            credit:'2'
        }]}
    }  
}
const getPKTableData = function(){
    return{
        code:1,
        msg:"登录成功",
        datas:[{
            cnumber:1101,
            crsname:'计算机原理',
            type:'专业必修',
            tnumber:'20061101',
            teaname:'张老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1102,
            crsname:'网络编程',
            type:'专业选修',
            tnumber:'20061102',
            teaname:'王老师',
            port:'教学楼A区A102',
            hours:54,
            credit:3
        },{
            cnumber:1103,
            crsname:'数据库原理',
            type:'专业必修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1104,
            crsname:'数据库原理',
            type:'专业选修',
            tnumber:'',
            teaname:'',
            port:'',
            hours:54,
            credit:3
        },{
            cnumber:1105,
            crsname:'数据结构',
            type:'专业必修',
            tnumber:'20061104',
            teaname:'赵老师',
            port:'教学楼A区A104',
            hours:64,
            credit:4
        },{
            cnumber:1106,
            crsname:'C语言程序设计',
            type:'专业必修',
            tnumber:'',
            teaname:'',
            port:'',
            hours:64,
            credit:4
        },{
            cnumber:1101,
            crsname:'计算机原理',
            type:'专业必修',
            tnumber:'',
            teaname:'',
            port:'',
            hours:64,
            credit:4
        },{
            cnumber:1102,
            crsname:'网络编程',
            type:'专业选修',
            tnumber:'',
            teaname:'',
            port:'',
            hours:54,
            credit:3
        },{
            cnumber:1103,
            crsname:'数据库原理',
            type:'专业必修',
            tnumber:'',
            teaname:'',
            port:'',
            hours:64,
            credit:4
        },{
            cnumber:1104,
            crsname:'数据库原理',
            type:'专业选修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:54,
            credit:3
        },{
            cnumber:1105,
            crsname:'数据结构',
            type:'专业必修',
            tnumber:'20061104',
            teaname:'赵老师',
            port:'教学楼A区A104',
            hours:64,
            credit:4
        },{
            cnumber:1106,
            crsname:'C语言程序设计',
            type:'专业必修',
            tnumber:'20061105',
            teaname:'周老师',
            port:'第一实验楼401',
            hours:64,
            credit:4
        },{
            cnumber:1101,
            crsname:'计算机原理',
            type:'专业必修',
            tnumber:'20061101',
            teaname:'张老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1102,
            crsname:'网络编程',
            type:'专业选修',
            tnumber:'20061102',
            teaname:'王老师',
            port:'教学楼A区A102',
            hours:54,
            credit:3
        },{
            cnumber:1103,
            crsname:'数据库原理',
            type:'专业必修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1104,
            crsname:'数据库原理',
            type:'专业选修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:54,
            credit:3
        },{
            cnumber:1105,
            crsname:'数据结构',
            type:'专业必修',
            tnumber:'20061104',
            teaname:'赵老师',
            port:'教学楼A区A104',
            hours:64,
            credit:4
        },{
            cnumber:1106,
            crsname:'C语言程序设计',
            type:'专业必修',
            tnumber:'20061105',
            teaname:'周老师',
            port:'第一实验楼401',
            hours:64,
            credit:4
        },{
            cnumber:1101,
            crsname:'计算机原理',
            type:'专业必修',
            tnumber:'20061101',
            teaname:'张老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1102,
            crsname:'网络编程',
            type:'专业选修',
            tnumber:'20061102',
            teaname:'王老师',
            port:'教学楼A区A102',
            hours:54,
            credit:3
        },{
            cnumber:1103,
            crsname:'数据库原理',
            type:'专业必修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1104,
            crsname:'数据库原理',
            type:'专业选修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:54,
            credit:3
        },{
            cnumber:1105,
            crsname:'数据结构',
            type:'专业必修',
            tnumber:'20061104',
            teaname:'赵老师',
            port:'教学楼A区A104',
            hours:64,
            credit:4
        },{
            cnumber:1106,
            crsname:'C语言程序设计',
            type:'专业必修',
            tnumber:'20061105',
            teaname:'周老师',
            port:'第一实验楼401',
            hours:64,
            credit:4
        },{
            cnumber:1101,
            crsname:'计算机原理',
            type:'专业必修',
            tnumber:'20061101',
            teaname:'张老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1102,
            crsname:'网络编程',
            type:'专业选修',
            tnumber:'20061102',
            teaname:'王老师',
            port:'教学楼A区A102',
            hours:54,
            credit:3
        },{
            cnumber:1103,
            crsname:'数据库原理',
            type:'专业必修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:64,
            credit:4
        },{
            cnumber:1104,
            crsname:'数据库原理',
            type:'专业选修',
            tnumber:'20061103',
            teaname:'李老师',
            port:'教学楼A区A101',
            hours:54,
            credit:3
        },{
            cnumber:1105,
            crsname:'数据结构',
            type:'专业必修',
            tnumber:'20061104',
            teaname:'赵老师',
            port:'教学楼A区A104',
            hours:64,
            credit:4
        },{
            cnumber:1106,
            crsname:'C语言程序设计',
            type:'专业必修',
            tnumber:'20061105',
            teaname:'周老师',
            port:'第一实验楼401',
            hours:64,
            credit:4
        }]
    }  
}
Mock.mock('/api/getAdminTableData','post',getAdminTableData)
Mock.mock('/api/getPKTableData','post',getPKTableData)
Mock.mock('/api/getTeaTableData','post',getTeaTableData)
Mock.mock('/api/getStuTableData','post',getStuTableData)
Mock.mock('/api/getCrsTableData','post',getCrsTableData);
Mock.mock('/api/loginAdmin','post',loginAdmin);
Mock.mock('/test/login','post',userInfo);
Mock.mock('/api/getTelCode','post',getTelCode);
Mock.mock('/api/getTermTable','post',getTermTable);
Mock.mock('/api/getRoomTable','post',getRoomTable);
Mock.mock('/api/getStuGradeTable','post',getStuGradeTable);
Mock.mock('/api/getSelectCrs','post',getSelectCrs);
Mock.mock('/api/getInfoTable','post',getInfoTable);
Mock.mock('/api/getTeaInfoTable','post',getTeaInfoTable);
Mock.mock('/api/getClassOptions','post',getClassOptions);
Mock.mock('/api/getCrsOptions','post',getCrsOptions);
Mock.mock('/api/getClassListTableData','post',getClassListTableData);
Mock.mock('/api/getTaskTable','post',getTaskTable);