package com.yupi.oj.judge.sandbox.impl;

import com.yupi.oj.judge.sandbox.CodeSandbox;
import com.yupi.oj.judge.sandbox.model.ExecuteCodeRequest;
import com.yupi.oj.judge.sandbox.model.ExecuteCodeResponse;

/**
 * 远程代码沙箱（实际调用接口的沙箱）
 */
public class RemoteCodeSandbox implements CodeSandbox {
    @Override
    public ExecuteCodeResponse executeCode(ExecuteCodeRequest executeCodeRequest) {
        System.out.println("远程沙箱");
        return null;
    }
}
