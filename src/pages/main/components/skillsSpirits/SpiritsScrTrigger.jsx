import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './SpiritsScrTrigger.module.scss';

gsap.registerPlugin(ScrollTrigger);

const SpiritsScrTrigger = () => {
  const triggerRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const ulWidth = ulRef.current.scrollWidth;
    const containerWidth = triggerRef.current.offsetWidth;

    gsap.to(ulRef.current, {
      x: -ulWidth + containerWidth, // ul 요소의 길이만큼 가로 스크롤
      ease: "power1.out",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'center bottom', // 컨테이너가 화면 하단에 도달했을 때 시작
        end: 'center top', // 컨테이너가 화면 상단에 도달했을 때 종료
        scrub: true,
        // pin: true, // 컨테이너가 고정됨
        anticipatePin: 1, // 페이지 로딩 시 컨테이너의 위치를 더 잘 계산
      },
    });

    // 배경 색상 애니메이션
    gsap.to(triggerRef.current, {
      backgroundColor: '#404040', // 배경 색상 변경
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'bottom center', // 컨테이너가 화면 하단에 도달했을 때 시작
        end: 'top top', // 컨테이너가 화면 상단에 도달했을 때 종료
        scrub: 1,
        // pin: true, // 컨테이너가 고정됨
        anticipatePin: 1, // 페이지 로딩 시 컨테이너의 위치를 더 잘 계산
      },
    });

    // Cleanup function to kill ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.triggerWrap} ref={triggerRef}>
      <ul ref={ulRef}>
        {/* <li>Sensitive</li>
        <li>Publishing</li> */}
        <li>Communicating</li>
        <li>FrontEnd</li>
        <li>Cooperative</li>
        <li>BackEnd</li>
      </ul>
    </div>
  );
};

export default SpiritsScrTrigger;
