1.  获取ActivityGroup信息
    a.  请求url
        /admin/activityCategory/{activityCategoryId}
    b.  method
        GET
    c.  参数
        见URL
    d.  返回值格式
        {
            "code" : 1,
            "msg" : "SUCCESS",
            "data" : {
                "baseInfo" : {
                    "id" : 1,
                    "categoryId" : 1,
                    "managePerson" : {
                        "id" : 1,
                        "name" : '王五',
                        "phone" : "186291927191"
                    },
                    "manageUnit" : {
                        "id" : 1,
                        "name" : "居委会"
                    },
                    "reminder" : "务必带上身份证"
                },
                "descrs" :[
                    {
                        "id" : 1,
                        "title" : "简介",
                        "imagePath": "/admin/files/20170427/189879027.jpg"
                    }
                ]
            }
        }
    e.  demo数据

2.  更新ActivityGroup信息
    a.  请求url
        /admin/activityCategory/{activityCategoryId}/update
    b.  method
        POST
    c.  参数
        url参数见URL,
        form参数：
            managePersonId      :   负责人id
            managePersonName    :   负责人姓名
            managePersonPhone   :   负责人手机号

            manageUnitId        :   负责单位ID
            manageUnitName      :   负责单位名称
            reminder            :   温馨提示
    d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  : null
        }
    e.  demo数据

3.  添加描述信息
     a.  请求url
        /admin/activityCategory/{activityCategoryId}/descr/add
     b.  method
        POST
     c.  参数
        url参数见url
        form参数：
            title   :   标题
            imagePath   :   图片地址
     d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  : null
        }
     e.  demo数据

4.  更新描述信息
     a.  请求url
        /admin/activityCategory/{activityCategoryId}/descr/{id}/update
     b.  method
        POST
     c.  参数
        url参数见url
        form参数：
            title   :   标题
            imagePath   :   图片地址
     d.  返回值格式
        {
            "code"  :   1,
            "msg"   :   "SUCCESS",
            "data"  : null
        }
     e.  demo数据

5  删除描述信息
      a.  请求url
         /admin/activityCategory/{activityCategoryId}/descr/{id}/delete
      b.  method
         POST
      c.  参数
         url参数见url
      d.  返回值格式
         {
             "code"  :   1,
             "msg"   :   "SUCCESS",
             "data"  : null
         }
      e.  demo数据
