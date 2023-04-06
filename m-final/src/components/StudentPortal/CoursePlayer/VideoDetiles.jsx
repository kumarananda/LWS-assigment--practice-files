/** @format */

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { showDateMonthYear } from "../../../utils/date";
import { useSelector } from "react-redux";
import { useGetAssignmentQuery } from "../../../features/api/assignments/assignmentsApi";
import { AssButton } from "./compo/AssButton";
import Modal from "../../ui/Modal/Modal";
import AssSubmitModal from "./compo/AssSubmitModal";
import { useGetAssignmentMarkQuery } from "../../../features/api/assignmentMark/assignmentMarkApi";
import ShowSubmitedModal from "./compo/ShowSubmitedModal";
import { useGetQuizForVideoQuery } from "../../../features/api/quizzes/quizzesApi";
import { useGetStuVideoQuizMarksQuery } from "../../../features/api/quizzesMark/quizzMarkApi";
import Video from "./Video";
import { useGetVideoQuery } from "../../../features/api/videos/videosApi";

const VideoDetiles = ({ firstId }) => {
  const { id: student_id, name: student_name } = useSelector(state => state.auth.user);
  const { videoId } = useParams();

  const queryId = (videoId ? videoId : firstId).toString();

  // Single video
  const { data: sVideo, isLoading: isSVLoading, isError: isSVError, isSuccess: isSVSuccess, error: SVerror } = useGetVideoQuery(queryId);

  // get assignment data
  const {
    data: assignment,
    refetch: assRefetch,
    isLoading: assLoading,
    isError: assError,
    isSuccess: assSuccess,
    error: ass_error,
  } = useGetAssignmentQuery(queryId);

  // Quiz data for this video
  const { data: quizdata, isLoading, isSuccess, isError } = useGetQuizForVideoQuery(queryId);
  // user data

  // get user assignment for this video
  const { data: submitedAss, refetch: assMarkRefetch } = useGetAssignmentMarkQuery(
    { student_id, assignment_id: assignment?.id },
    { skip: !assignment?.id }
  );
  // get user quiz data if submited for this video
  const {
    data: stuVideoQuizzs,
    isSuccess: qMarkSuccess,
    refetch: quizRefetch,
  } = useGetStuVideoQuizMarksQuery({ student_id, video_id: queryId }, { skip: false });

  // ass modal status
  const [assSubmit, setAssSubmit] = useState(false);
  // assignment Show
  const [showSubmit, setShowSubmit] = useState(false);

  // create assignment button
  let assButton = null;
  if (assLoading) {
    assButton = <AssButton>এসাইনমেন্ট নেই</AssButton>; // লোডিং // Loading
  }
  if (!assLoading && assError) {
    assButton = <AssButton>এসাইনমেন্ট নেই</AssButton>;
  }
  if (!assLoading && !assError && assSuccess) {
    if (!submitedAss || !submitedAss?.length) {
      assButton = (
        <AssButton action={setAssSubmit} value={true}>
          এসাইনমেন্ট জমাদিন
        </AssButton>
      );
    } else if (submitedAss?.length > 0) {
      assButton = (
        <AssButton action={setShowSubmit} value={true}>
          আপনি যা জমা দিয়েছেন
        </AssButton>
      );
    }
  }

  // make quize button
  let quizButton = null;
  if (isLoading) {
    quizButton = <AssButton>কুইজ নেই</AssButton>;
  }
  if (!isLoading && isError) {
    quizButton = <AssButton>কুইজ নেই</AssButton>;
  }
  if (!isLoading && !isError && isSuccess) {
    if (!quizdata?.length) {
      quizButton = <AssButton>কুইজ নেই</AssButton>;
    } else if (quizdata?.length > 0) {
      if (qMarkSuccess) {
        if (stuVideoQuizzs.length > 0) {
          quizButton = (
            <Link
              to={`/quiz/${queryId}`}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজ মাৰ্ক দেখুন
            </Link>
          );
        } else {
          quizButton = (
            <Link
              to={`/quiz/${queryId}`}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজে অংশগ্রহণ করুন
            </Link>
          );
        }
      } else {
        quizButton = (
          <Link
            to={`/quiz/${videoId}`}
            onClick={e => e.preventDefault()}
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </Link>
        );
      }
    }
  }

  // from single query
  let content = null;
  if (isSVLoading) {
    content = "Loading...";
  }
  if (!isSVLoading && isSVError) {
    content = "Thare was an error!";
  }
  if (!isSVLoading && !isSVError && isSVSuccess) {
    if (!sVideo?.id) {
      content = "Video not found";
    }
    if (sVideo?.id) {
      content = <Video video={sVideo} quizButton={quizButton} assButton={assButton} />;
    }
  }

  //////  /////
  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">{content}</div>
      {/* Assingment Submit */}
      <Modal modalOpen={assSubmit} setModalOpen={setAssSubmit} MBoxWidth={600} outCickHide={true}>
        <AssSubmitModal
          assRefetch={assRefetch}
          assMarkRefetch={assMarkRefetch}
          student_id={student_id}
          student_name={student_name}
          assignment={assignment}
          setStatus={setAssSubmit}
        />
      </Modal>
      {/* Show submited assignment */}
      <Modal modalOpen={showSubmit} setModalOpen={setShowSubmit} MBoxWidth={600} outCickHide={true}>
        <ShowSubmitedModal assignment={submitedAss?.length ? submitedAss[0] : {}} setStatus={setShowSubmit} />
      </Modal>
    </>
  );
};

export default VideoDetiles;
