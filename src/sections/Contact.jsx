import React, { forwardRef, useState, memo } from "react";
import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials, email } from "../constants";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
      "build & solve",
      "code → craft", 
      "think > build",
      "design → code",
      "idea → app"
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col justify-between min-h-screen bg-primary-bg"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={t('contact_subtitle')}
          title={t('contact_title')}
          text={t('contact_text')}
          textColor={"text-primary-text"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-primary-text uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>{t('contact_email_label')}</h2>
              <div className="w-full h-px my-2 bg-secondary-text/30" />
              <div onClick={handleCopy} className="cursor-pointer">
                <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                  {copied ? t('nav_copied') : email}
                </p>
              </div>
            </div>
            <div className="social-link">
              <h2>{t('contact_social_media_label')}</h2>
              <div className="w-full h-px my-2 bg-secondary-text/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-accent transition-colors duration-200"
                  >
                    {" { "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-primary-text bg-transparent" />
    </section>
  );
});

export default memo(Contact);