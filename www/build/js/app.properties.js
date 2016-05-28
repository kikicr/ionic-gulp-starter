var application = {
    "name":"jakartaOne",
    "version":"0.0.1",
    "adapter":{
        "ip":"http://localhost:8103",
        "baseUrl":function(){return application.adapter.ip+"/mobile-webconsole/apps/";},
        "jakOneUrl":function(){return application.adapter.ip+"/mobile-webconsole/apps/1/jakoneAdapter/";}
    }
}