// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { copy2clipboard } from '../../utils/utils';

export const HeroSection: FC = () => {
  return (
    <div className="from-zinc-50 to-white dark:from-zinc-950 to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="content-animate">
            <div className="circle-first">
              <div className="circle-first-one" />
              <div className="circle-first-two" />
            </div>
            <div className="circle-second"></div>
            <div className="circle-third"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
            libro
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            灵活定制、轻松集成的 Notebook 产品方案
          </p>
          <Button type="primary" size="large" className="start-btn" href="http://libro-lab.difizen.net/libro?" target="_blank">
            Start now
          </Button>
          <Button size="large" className="install-btn" onClick={()=>copy2clipboard("pip install libro")}>
            pip install libro
          </Button>
        </div>
        <img
          alt="app screenshot"
          src="/libro.png"
          width={2432}
          height={1442}
          className="mt-8 rounded-md shadow-2xl border sm:mt-12 block dark:hidden border-none"
        />
        <img
          alt="app screenshot"
          src="/libro.png"
          width={2432}
          height={1442}
          className="mt-8 rounded-md shadow-2xl border sm:mt-12 hidden dark:block border-none"
        />
      </div>
    </div>
  );
}
