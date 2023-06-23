import React from "react";

import { ErrorBoundary } from '../ErrorBoundary';

import { Input } from '../Input';

import { CardList } from '../CardList';

import '../App.css';

export const MainPage = () =>
    <div className="Main">
        <Input />
        <ErrorBoundary>
            <CardList />
        </ErrorBoundary>
    </div>;
