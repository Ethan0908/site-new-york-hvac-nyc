'use client';

import { useRef, useState, type KeyboardEvent } from 'react';

type RequestType = {
  id: string;
  label: string;
  summary: string;
  useful: string[];
  careful: string;
};

type RequestRouterProps = {
  phoneHref: string;
  phoneLabel: string;
  requestTypes: RequestType[];
};

export default function RequestRouter({ phoneHref, phoneLabel, requestTypes }: RequestRouterProps) {
  const [activeId, setActiveId] = useState(requestTypes[0]?.id ?? '');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeRequest = requestTypes.find((item) => item.id === activeId) ?? requestTypes[0];

  if (!activeRequest) {
    return null;
  }

  function focusTab(index: number) {
    const nextRequest = requestTypes[index];
    if (!nextRequest) return;
    setActiveId(nextRequest.id);
    window.requestAnimationFrame(() => tabRefs.current[nextRequest.id]?.focus());
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      focusTab((currentIndex + 1) % requestTypes.length);
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      focusTab((currentIndex - 1 + requestTypes.length) % requestTypes.length);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusTab(requestTypes.length - 1);
    }
  }

  return (
    <section className="section request-router" id="scope" aria-labelledby="scope-title">
      <div className="request-router__header">
        <div>
          <p className="eyebrow">Scope router</p>
          <h2 id="scope-title">Sort the request before you ask for a result.</h2>
        </div>
        <p>
          No detailed service menu was supplied. The selector turns common HVAC request types into
          call preparation, while keeping unsupported claims off the page.
        </p>
      </div>

      <div className="router-shell">
        <div className="router-tabs" role="tablist" aria-label="HVAC request types">
          {requestTypes.map((request, index) => (
            <button
              className="router-tab"
              data-active={request.id === activeRequest.id}
              id={`tab-${request.id}`}
              key={request.id}
              onClick={() => setActiveId(request.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[request.id] = element;
              }}
              role="tab"
              type="button"
              aria-controls={`panel-${request.id}`}
              aria-selected={request.id === activeRequest.id}
              tabIndex={request.id === activeRequest.id ? 0 : -1}
            >
              <span>{request.label}</span>
              <small>{request.summary}</small>
            </button>
          ))}
        </div>

        <div
          className="router-panel"
          id={`panel-${activeRequest.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeRequest.id}`}
        >
          <div className="router-panel__head">
            <span className="micro-label">Active intake</span>
            <h3>{activeRequest.label}</h3>
            <p>{activeRequest.summary}</p>
          </div>

          <div className="router-panel__grid">
            <div className="router-list">
              <h4>Useful to mention</h4>
              <ul className="check-list">
                {activeRequest.useful.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="router-note">
              <span>Scope clarity</span>
              <p>{activeRequest.careful}</p>
              <a className="text-link" href={phoneHref}>
                Call {phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
