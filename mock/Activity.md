1.  根据category获取活动列表
    a.  请求url
        /admin/activity/getByCategory
    b.  method
        GET
    c.  参数
        categoryId  : 活动类别ID
        pageNo      :   页号
        pageSize    :   每页大小
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "recordsTotal"  :   2,  //总记录数
                "data" :   [{
                    "id"    : 1,        //活动ID
                    "status" : "WAIT",  //活动状态  WAIT: 未开始 DOING:进行中  END:已结束 SUMMARIZED:已总结
                    "name"  : "象棋大赛",   //活动名称
                    "imgPath":  "",     //图片地址
                    "locationName":"棋牌室", //地点名称
                    "locationId":"1"，   //地点id
                    "startDate":"",     //开始时间
                    "endDate":""        //结束时间
                }]
            }
        }
    e.  demo数据

2.  添加活动
    a.  请求url
        /admin/activity/add
    b.  method
        POST
    c.  参数
        categoryId:活动类别id
        name:活动名称
        imagePath:图片地址
        startDate:开始时间
        endDate:结束时间
        locationId:地点id
        locationName:地点名称
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "activityId" : 1    //新增活动的id
            }
        }
    e.  demo数据

3.  更新活动
    a.  请求url
        /admin/activity/{id}/update
    b.  method
        POST
    c.  参数
         name:活动名称
         imagePath:图片地址
         startDate:开始时间
         endDate:结束时间
         locationId:地点id
         locationName:地点名称
    d.  返回值格式
         {
              "code"  :   1,
               "msg"   :   "SUCCESS"
         }
    e.  demo数据

4.  删除活动
    a.  请求url
        /admin/activity/{id}/delete
    b.  method
        POST
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS"
        }
    e.  demo数据

5.  添加活动描述
    a.  请求url
        /admin/activity/{id}/descr/add
    b.  method
        POST
    c.  参数
        title:标题
        imgPath:图片路径
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :{
                "descrId" : 1   //新增活动描述ID
            }
        }
    e.  demo数据

6.  更新活动描述
    a.  请求url
        /admin/activity/{activityId}/descr/{desrcId}/update
    b.  method
        POST
    c.  参数
        title:标题
        imgPath:图片路径
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS"
        }
    e.  demo数据

7.  删除活动描述
    a.  请求url
        /admin/activity/{activityId}/descr/{desrcId}/delete
    b.  method
        POST
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS"
        }
    e.  demo数据

8.  添加活动总结
    a.  请求url
        /admin/activity/{activityId}/summary/add
    b.  method
    c.  参数
        title:标题
        imgPath:图片路径
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "summaryId"   :   1   //新增总结ID
            }
        }
    e.  demo数据

9.  更新活动总结
    a.  请求url
        /admin/activity/{activityId}/summary/{summaryId}/update
    b.  method
    c.  参数
        title:标题
        imgPath:图片路径
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS"
        }
    e.  demo数据

10.  删除活动总结
    a.  请求url
        /admin/activity/{activityId}/summary/{summaryId}/delete
    b.  method
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS"
        }
    e.  demo数据

11.  邀请居民
    a.  请求url
        /admin/activity/{activityId}/participant/invite
    b.  method
        POST
    c.  参数
        uid ： 邀请人id
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "participantId"   :   1   //新增邀请ID
            }
        }
    e.  demo数据

12.  获取邀请列表
    a.  请求url
        /admin/activity/{activityId}/participant/invited
    b.  method
        GET
    c.  参数
        pageNo      :   页号
        pageSize    :   每页大小
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "recordsTotal"  :   2,  //总记录数
                "data" :   [{
                    "id"    :   1   //参与者id
                    "userName" : "张三",  //姓名
                    "userPhone"  : "18627891872",   //手机号
                    "gender":  {
                        "name" : "男",
                        "value": "MAN"
                    },     //性别
                    "age":20
                    "dateOfBirth":"", //出生日期
                    "smsStatus":{ //短信通知状态 NONE:未通知 NOTIFIED ： 已通知
                        "name" : "未通知E",
                        "value": "NONE"
                    },
                    "remark" : "" //备注
                }]
            }
        }
    e.  demo数据

13.  获取预约列表
    a.  请求url
        /admin/activity/{activityId}/participant/applied
    b.  method
        GET
    c.  参数
        pageNo      :   页号
        pageSize    :   每页大小
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "recordsTotal"  :   2,  //总记录数
                "data" :   [{
                    "id"    :   1   //参与者id
                    "userName" : "张三",  //姓名
                    "userPhone"  : "18627891872",   //手机号
                    "gender":  {
                        "name" : "男",
                        "value": "MAN"
                    },     //性别
                    "age" : 23,
                    "dateOfBirth":"", //出生日期
                    "smsStatus":{ //短信通知状态 NONE:未通知 NOTIFIED ： 已通知
                        "name" : "未通知",
                        "value": "NONE"
                    },
                    "remark" : "" //备注
                }]
            }
        }
    e.  demo数据

14.  更新参与者信息
    a.  请求url
        /admin/activity/{activityId}/participant/{id}/update
    b.  method
        POST
    c.  参数
        remark:备注
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "participantId"   :   1   //新增邀请ID
            }
        }
    e.  demo数据

15.  删除参与者信息
    a.  请求url
        /admin/activity/{activityId}/participant/{id}/delete
    b.  method
        POST
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "participantId"   :   1   //新增邀请ID
            }
        }
    e.  demo数据
16. 获取活动详情
    a.  请求url
        /admin/activity/{id}
    b.  method
        GET
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                    "id"    : 1,        //活动ID
                    "status" : "WAIT",  //活动状态  WAIT: 未开始 DOING:进行中  END:已结束 SUMMARIZED:已总结
                    "name"  : "象棋大赛",   //活动名称
                    "imgPath":  "",     //图片地址
                    "locationName":"棋牌室", //地点名称
                    "locationId":"1"，   //地点id
                    "startDate":"",     //开始时间
                    "endDate":""        //结束时间
               }
        }
    e.  demo数据

17.  获取活动描述
    a.  请求url
        /admin/activity/{activityId}/descr
    b.  method
        GET
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   [{
                "id":   1,
                "title":    "",
                "descr":    "",
                "imagePath":""
            }]
        }
    e.  demo数据

18.  获取活动描述
    a.  请求url
        /admin/activity/{activityId}/summary
    b.  method
        GET
    c.  参数

    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   [{
                "id":   1,
                "title":    "",
                "descr":    "",
                "imagePath":""
            }]
        }
    e.  demo数据

19. 根据category获取未开始活动列表
        a.  请求url
            /admin/activity/category/{categoryId}/wait
        b.  method
            GET
        c.  参数
            categoryId  : 活动类别ID
        d.  返回值格式
            {
                "code"  :   1,
                "msg"   :   "SUCCESS",
                "data" :   [{
                    "id"    : 1,        //活动ID
                    "status" : "WAIT",  //活动状态  WAIT: 未开始 DOING:进行中  END:已结束 SUMMARIZED:已总结
                    "name"  : "象棋大赛",   //活动名称
                    "imgPath":  "",     //图片地址
                    "locationName":"棋牌室", //地点名称
                    "locationId":"1"，   //地点id
                    "startDate":"",     //开始时间
                    "endDate":""        //结束时间
                }]
            }
        e.  demo数据

20.  活动报名-管理员添加
    a.  请求url
        /admin/activity/{activityId}/participant/add
    b.  method
        POST
    c.  参数
        userName : 用户名称
        userPhone : 用户电话
        remark : 备注
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
               //新增参与人员信息
               "id"    :   1   //参与者id
               "userName" : "张三",  //姓名
               "userPhone"  : "18627891872",   //手机号
               "gender":  {
                   "name" : "男",
                   "value": "MAN"
               },     //性别
               "age" : 23,
               "dateOfBirth":"", //出生日期
               "smsStatus":{ //短信通知状态 NONE:未通知 NOTIFIED ： 已通知
                   "name" : "未通知",
                   "value": "NONE"
               },
               "remark" : "" //备注
            }
        }
    e.  demo数据

21.  获取活动人员列表
    a.  请求url
        /admin/activity/{activityId}/participants
    b.  method
        GET
    c.  参数
        activityId  :   活动ID
        pageNo      :   页号
        pageSize    :   每页大小
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  :   {
                "recordsTotal"  :   2,  //总记录数
                "data" :   [{
                    "id"    :   1   //参与者id
                    "userName" : "张三",  //姓名
                    "userPhone"  : "18627891872",   //手机号
                    "gender":  {
                        "name" : "男",
                        "value": "MAN"
                    },     //性别
                    "age" : 23,
                    "dateOfBirth":"", //出生日期
                    "smsStatus":{ //短信通知状态 NONE:未通知 NOTIFIED ： 已通知
                        "name" : "未通知",
                        "value": "NONE"
                    },
                    "remark" : "" //备注
                }]
            }
        }
    e.  demo数据