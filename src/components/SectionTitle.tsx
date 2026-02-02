import React from 'react';
import { Container } from '@/components/Container';

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  section?: string;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`scroll-mt-28 flex w-full flex-col mt-8 ${
        props.align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
      id={props.section}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
};
