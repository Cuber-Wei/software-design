package com.l0v3ch4n.oj.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 帖子评论
 * @TableName post_comment
 */
@TableName(value ="post_comment")
@Data
public class PostComment implements Serializable {
    /**
     * id
     */
    @TableId(type = IdType.ASSIGN_ID)
    private Long postCommentId;

    /**
     * 创建用户 id
     */
    private Long userId;

    /**
     * 帖子 id
     */
    private Long postId;

    /**
     * 评论内容
     */
    private String content;

    /**
     * 审核状态（0 - 待审核、1 - 审核通过、2 - 审核未通过）
     */
    private Integer reviewStatus;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 是否删除
     */
    private Integer isDelete;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}