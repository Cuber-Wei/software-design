package com.yupi.oj.judge.sandbox;

import com.yupi.oj.judge.sandbox.model.ExecuteCodeRequest;
import com.yupi.oj.judge.sandbox.model.ExecuteCodeResponse;

/**
 * 代码沙箱接口定义
 */
public interface CodeSandbox {
    /**
     * 执行代码
     *
     * @param executeCodeRequest
     * @return
     */
    ExecuteCodeResponse executeCode(ExecuteCodeRequest executeCodeRequest);
}
