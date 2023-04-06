/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showDateMonthYear } from "../../../utils/date";
import { useSelector } from "react-redux";
import { useGetAssignmentQuery } from "../../../features/api/assignments/assignmentsApi";
import { AssButton } from "./AssButton";
import Modal from "../../ui/Modal/Modal";
import AssSubmitModal from "./AssSubmitModal";
import { useGetAssignmentMarkQuery } from "../../../features/api/assignmentMark/assignmentMarkApi";
import ShowSubmitedModal from "./ShowSubmitedModal";
import { useGetQuizForVideoQuery } from "../../../features/api/quizzes/quizzesApi";
import { useGetStuVideoQuizMarksQuery } from "../../../features/api/quizzesMark/quizzMarkApi";

const VideoDetiles = ({ video }) => {
  const { id: videoId, title, description, url, views, duration, createdAt } = video || {};

  // Quiz data for this video
  const { data: quizdata, isLoading, isSuccess, isError } = useGetQuizForVideoQuery(videoId);

  // get assignment data
  const {
    data: assignment,
    refetch: assRefetch,
    isLoading: assLoading,
    isError: assError,
    isSuccess: assSuccess,
    error: ass_error,
  } = useGetAssignmentQuery(videoId);
  // user data
  const { id: student_id, name: student_name } = useSelector(state => state.auth.user);

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
  } = useGetStuVideoQuizMarksQuery({ student_id, video_id: videoId }, { skip: false });

  console.log(stuVideoQuizzs);

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
              to={`/quiz/${videoId}`}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজ মাৰ্ক দেখুন
            </Link>
          );
        } else {
          quizButton = (
            <Link
              to={`/quiz/${videoId}`}
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

  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <iframe
          width="100%"
          className="aspect-video"
          src={url}
          title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">{title}</h1>
          <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">Uploaded on {showDateMonthYear(createdAt)} </h2> {/*23 February 2020 */}
          <div className="flex gap-4 justify-between">
            {assButton}
            {quizButton}
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        </div>
      </div>
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
