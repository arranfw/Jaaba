//TODO: this is the page that makes the call
// should have a loader that calls the jira loader
// form goes here

import type { ActionFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { manager } from '~/managers';

// REPLACE contents of Index() with:
//LOADER
// https://remix.run/docs/en/v1/api/conventions#loader
// - have the loader contact the loader in /jira

// BUTTON

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case 'POST': {
      return await manager.CreateTicket('title', 'body');
    }
  }
};

export default function Index() {
  return (
    <Form
      method='post'
      className='flex justify-center items-center h-full w-full'
    >
      <button
        type='submit'
        className='p-2 rounded bg-slate-100 shadow-md font-bold'
      >
        Create Jira Ticket
      </button>
    </Form>
  );
}
