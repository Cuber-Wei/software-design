package com.yupi.oj.judge.sandbox.impl;

import com.yupi.oj.judge.sandbox.CodeSandbox;
import com.yupi.oj.judge.sandbox.model.ExecuteCodeRequest;
import com.yupi.oj.judge.sandbox.model.ExecuteCodeResponse;

/**
 * 第三方代码沙箱（调用网上现成的代码沙箱
 */
public class ThirdPartyCodeSandbox implements CodeSandbox {
    @Override
    public ExecuteCodeResponse executeCode(ExecuteCodeRequest executeCodeRequest) {
        System.out.println("第三方沙箱");
        return null;
    }
}
