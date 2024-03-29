import gsap from 'gsap';

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to('body', {
    duration: 0.1,
    css: { overflowY: 'hidden' },
    ease: 'power3.inOut',
  })
    // .to('.home', {
    //   duration: 0.05,
    //   css: { overflowY: 'hidden', height: '90vh' },
    // })
    .to('.lightCyan-slider', {
      x: '-5%',
      duration: 1,
    })
    .to(
      '.persianGreen-slider',
      {
        x: '-10%',
        duration: 1.5,
      },
      '-=1'
    )
    .to(
      '.white-slider',
      {
        x: '-15%',
        duration: 1.5,
      },
      '-=1'
    )
    .to('#logo-anim', {
      display: 'flex',
      xPercent: 40,
      opacity: 1,
      duration: 1,
      transform: 'scale(.65)',
    })
    .to('#logo-anim', {
      xPercent: 0,
      ease: 'Power1.easeIn',
    })
    .to(
      '#logo-anim',
      {
        duration: 4.5,
        // delay: 0.3,
        css: { fill: '#ffffff' },
        ease: 'Power1.easeOut',
      },
      '-=1'
    )
    .to(
      '.texts-container',
      {
        duration: 0,
        opacity: 1,
        ease: 'Power3.easeOut',
      },
      '-=1'
    )
    .from('.texts-container span', {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: 'Power3.easeOut',
    })
    .to('#logo-anim', {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: 'Power1.easeOut',
    })
    .to('.texts-container span', {
      duration: 1,
      y: 70,
      // skewY: -20,
      stagger: 0.2,
      ease: 'Power1.easeOut',
    })
    .to(
      '.white-slider',
      {
        x: 0,
        duration: 1.5,
      },
      '-=1'
    )
    .to(
      '.persianGreen-slider',
      {
        x: 0,
        duration: 1.5,
      },
      '-=1'
    )
    .to('.lightCyan-slider', {
      x: 0,
      duration: 1,
    })
    .to('.preloader', {
      yPercent: -100,
      duration: 1.5,
      ease: 'Power1.easeOut',
    })
    .from('.header', {
      opacity: 0,
      duration: 0.5,
    })
    .to('.header', {
      opacity: 1,
      yPercent: 0,
    })
    .to('body', {
      duration: 0.1,
      css: { overflowY: 'scroll' },
      ease: 'power3.inOut',
    })
    .to('.preloader', {
      duration: 0,
      css: { display: 'none' },
    });
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to('body', {
    duration: 0.1,
    css: { overflowY: 'hidden' },
    ease: 'power3.out',
  })
    .to('.hamburger-menu', {
      duration: 0.1,
      css: { display: 'block' },
    })
    .to('.header-item', {
      duration: 0.1,
      css: { background: 'none' },
    })
    .to('.cls-1', {
      duration: 0.1,
      delay: 0.3,
      css: { fill: '#ffffff' },
    })
    .to(
      ['.nav-secondary', '.nav-primary'],
      {
        duration: 0.8,
        height: '100%',
        transformOrigin: 'right top',
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.inOut',
      },
      '-=.5'
    )
    .from(
      '.nav-link',
      {
        duration: 0.5,
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
        ease: 'Power3.in',
      },
      '-=.3'
    );

  // change cursor color when nav is open
  // tl.to(".cursor", {
  //   delay: -1,
  //   css: { className: "+=cursor-active" },
  // }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to('body', {
    duration: 0.05,
    css: { overflowY: 'scroll' },
    ease: 'power3.inOut',
  })
    .to(['.nav-primary', '.nav-secondary'], {
      duration: 0.8,
      height: '0',
      transformOrigin: 'right top',
      stagger: {
        amount: 0.1,
      },
      ease: 'power3.inOut',
    })
    .to('.cls-1', {
      duration: 0.1,
      delay: -0.3,
      css: { fill: '#08e7f3' },
    })
    .to('.header-item', {
      duration: 0.5,
      css: { background: 'rgba(11,11,15,.8)' },
    })
    .to('.hamburger-menu', {
      duration: 0.05,
      css: { display: 'none' },
    });

  // tl.to(".cursor-active", {
  //   css: { className: "+=cursor" },
  // }).to(".cursor2-active", { css: { className: "+=cursor2" } });
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: 'power3.Out',
  });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from('.landing__main2', {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: 'expo.easeOut',
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector('.link'), {
        duration: 0,
        opacity: 1,
      })
      .from(e.target.querySelectorAll('.box-anim'), {
        duration: 0.3,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: 'Power3.easeOut',
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector('.link'), {
      duration: 0,
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 1,
    height: 'auto',
    ease: 'power4.out',
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    height: 0,
    ease: 'power4.out',
    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
  });
};
