package com.gsvl.oneul.jmt.review;

import com.gsvl.oneul.jmt.review.model.JmtReviewEntity;
import com.gsvl.oneul.jmt.review.model.JmtReviewVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JmtReviewMapper {
    int insReview(JmtReviewEntity entity);
    List<JmtReviewVo> selReviewList(JmtReviewEntity entity);
    JmtReviewVo selReview(JmtReviewEntity entity);
    int delReview(JmtReviewEntity entity);
    int updReview(JmtReviewEntity entity);
    //사진 등록
    int insReviewImg(JmtReviewEntity entity);
}
