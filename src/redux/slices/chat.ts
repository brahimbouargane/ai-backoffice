// import keyBy from 'lodash/keyBy';
// import { createSlice, Dispatch } from '@reduxjs/toolkit';
// // utils
// import axios, { API_ENDPOINTS } from 'src/utils/axios';
// // types
// import { IChatState, IChatParticipant } from 'src/types/chat';

// // ----------------------------------------------------------------------

// const initialState: IChatState = {
//   contacts: [],
//   recipients: [],
//   currentConversationId: null,
//   conversations: { byId: {}, allIds: [] },
//   conversationsStatus: {
//     loading: false,
//     empty: false,
//     error: null,
//   },
// };

// const slice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     // GET CONTACT
//     getContactsSuccess(state, action) {
//       state.contacts = action.payload;
//     },

//     // GET CONVERSATIONS
//     getConversationsStart(state) {
//       state.conversationsStatus.loading = true;
//       state.conversationsStatus.empty = false;
//       state.conversationsStatus.error = null;
//     },
//     getConversationsFailure(state, action) {
//       state.conversationsStatus.loading = false;
//       state.conversationsStatus.empty = false;
//       state.conversationsStatus.error = action.payload;
//     },
//     getConversationsSuccess(state, action) {
//       const conversations = action.payload;

//       state.conversationsStatus.loading = false;
//       state.conversationsStatus.empty = !conversations.length;
//       state.conversationsStatus.error = null;

//       state.conversations.byId = keyBy(conversations, 'id');
//       state.conversations.allIds = Object.keys(state.conversations.byId);
//     },

//     // GET CONVERSATION
//     getConversationSuccess(state, action) {
//       const conversation = action.payload;

//       if (conversation) {
//         state.recipients = [];
//         state.currentConversationId = conversation.id;
//         state.conversations.byId[conversation.id] = conversation;
//         if (!state.conversations.allIds.includes(conversation.id)) {
//           state.conversations.allIds.push(conversation.id);
//         }
//       } else {
//         state.currentConversationId = null;
//       }
//     },

//     // ON SEND MESSAGE
//     sendMessageSuccess(state, action) {
//       const { conversationId, message } = action.payload;

//       if (conversationId) {
//         state.conversations.byId[conversationId].messages.push(message);
//       }
//     },

//     // MARK THE CONVERSATION AS SEEN
//     markAsSeenSuccess(state, action) {
//       const { conversationId } = action.payload;
//       const conversation = state.conversations.byId[conversationId];

//       if (conversation) {
//         conversation.unreadCount = 0;
//       }
//     },

//     // RESET ACTIVE CONVERSATION
//     resetActiveConversation(state) {
//       state.currentConversationId = null;
//     },

//     // ADD RECIPIENTS WHEN CREATE NEW CONVERSATION
//     addRecipients(state, action) {
//       state.recipients = action.payload;
//     },
//   },
// });

// // Reducer
// export default slice.reducer;

// // Actions
// export const { addRecipients, resetActiveConversation } = slice.actions;

// // ----------------------------------------------------------------------

// export function getContacts() {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.get(API_ENDPOINTS.chat, {
//         params: {
//           endpoint: 'contacts',
//         },
//       });
//       dispatch(slice.actions.getContactsSuccess(response.data.contacts));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function getConversations() {
//   return async (dispatch: Dispatch) => {
//     dispatch(slice.actions.getConversationsStart());
//     try {
//       const response = await axios.get(API_ENDPOINTS.chat, {
//         params: {
//           endpoint: 'conversations',
//         },
//       });
//       dispatch(slice.actions.getConversationsSuccess(response.data.conversations));
//     } catch (error) {
//       dispatch(slice.actions.getConversationsFailure(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function getConversation(conversationId: string) {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.get(API_ENDPOINTS.chat, {
//         params: {
//           conversationId,
//           endpoint: 'conversation',
//         },
//       });
//       dispatch(slice.actions.getConversationSuccess(response.data.conversation));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function sendMessage(conversationId: string, body: string) {
//   return async (dispatch: Dispatch) => {
//     try {
//       const data = {
//         conversationId,
//         body,
//       };
//       const response = await axios.put(API_ENDPOINTS.chat, data);
//       dispatch(slice.actions.sendMessageSuccess(response.data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// export function createNewConversation(recipients: IChatParticipant[], body: string) {
//   return async (dispatch: Dispatch) => {
//     try {
//       const data = {
//         recipients,
//         body,
//       };
//       const response = await axios.post(API_ENDPOINTS.chat, data);
//       dispatch(slice.actions.getConversationSuccess(response.data.conversation));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function markAsSeen(conversationId: string) {
//   return async (dispatch: Dispatch) => {
//     try {
//       await axios.get(API_ENDPOINTS.chat, {
//         params: {
//           conversationId,
//           endpoint: 'mark-as-seen',
//         },
//       });

//       dispatch(slice.actions.markAsSeenSuccess({ conversationId }));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
import keyBy from 'lodash/keyBy';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
// types
import { IChatState, IChatParticipant, IChatConversation, IChatMessage } from 'src/types/chat';

// ----------------------------------------------------------------------

// Mock data for conversations and contacts
const mockContacts: IChatParticipant[] = [
  {
    id: '1',
    name: 'Alice',
    role: 'admin',
    email: 'alice@example.com',
    address: '123 Main St',
    avatarUrl: '',
    phoneNumber: '123-456-7890',
    lastActivity: new Date(),
    status: 'online',
  },
  {
    id: '2',
    name: 'Bob',
    role: 'user',
    email: 'bob@example.com',
    address: '456 Elm St',
    avatarUrl: '',
    phoneNumber: '234-567-8901',
    lastActivity: new Date(),
    status: 'offline',
  },
];

const mockConversations: IChatConversation[] = [
  {
    id: '1',
    type: 'private',
    unreadCount: 0,
    participants: [mockContacts[0]],
    messages: [
      {
        id: 'm1',
        body: 'Hello Alice!',
        createdAt: new Date(),
        senderId: '1',
        contentType: 'text',
        attachments: [],
      },
    ],
  },
  {
    id: '2',
    type: 'private',
    unreadCount: 1,
    participants: [mockContacts[1]],
    messages: [
      {
        id: 'm2',
        body: 'Hi Bob!',
        createdAt: new Date(),
        senderId: '2',
        contentType: 'text',
        attachments: [],
      },
    ],
  },
];

const initialState: IChatState = {
  contacts: [],
  recipients: [],
  currentConversationId: null,
  conversations: { byId: {}, allIds: [] },
  conversationsStatus: {
    loading: false,
    empty: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // GET CONTACT
    getContactsSuccess(state, action: { payload: IChatParticipant[] }) {
      state.contacts = action.payload;
    },

    // GET CONVERSATIONS
    getConversationsStart(state) {
      state.conversationsStatus.loading = true;
      state.conversationsStatus.empty = false;
      state.conversationsStatus.error = null;
    },
    getConversationsFailure(state, action: { payload: string }) {
      state.conversationsStatus.loading = false;
      state.conversationsStatus.empty = false;
      state.conversationsStatus.error = { message: action.payload }; // Proper error assignment
    },
    getConversationsSuccess(state, action: { payload: IChatConversation[] }) {
      const conversations = action.payload || [];

      state.conversationsStatus.loading = false;
      state.conversationsStatus.empty = conversations.length === 0;
      state.conversationsStatus.error = null;

      state.conversations.byId = keyBy(conversations, 'id');
      state.conversations.allIds = Object.keys(state.conversations.byId);
    },

    // GET CONVERSATION
    getConversationSuccess(state, action: { payload: IChatConversation | null }) {
      const conversation = action.payload;

      if (conversation) {
        state.recipients = [];
        state.currentConversationId = conversation.id;
        state.conversations.byId[conversation.id] = conversation;
        if (!state.conversations.allIds.includes(conversation.id)) {
          state.conversations.allIds.push(conversation.id);
        }
      } else {
        state.currentConversationId = null;
      }
    },

    // ON SEND MESSAGE
    sendMessageSuccess(
      state,
      action: { payload: { conversationId: string; message: IChatMessage } }
    ) {
      const { conversationId, message } = action.payload;

      if (conversationId) {
        state.conversations.byId[conversationId].messages.push(message);
      }
    },

    // MARK THE CONVERSATION AS SEEN
    markAsSeenSuccess(state, action: { payload: { conversationId: string } }) {
      const { conversationId } = action.payload;
      const conversation = state.conversations.byId[conversationId];

      if (conversation) {
        conversation.unreadCount = 0;
      }
    },

    // RESET ACTIVE CONVERSATION
    resetActiveConversation(state) {
      state.currentConversationId = null;
    },

    // ADD RECIPIENTS WHEN CREATE NEW CONVERSATION
    addRecipients(state, action: { payload: IChatParticipant[] }) {
      state.recipients = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addRecipients, resetActiveConversation } = slice.actions;

// ----------------------------------------------------------------------

// Mock function to simulate getting contacts
export function getContacts() {
  return async (dispatch: Dispatch) => {
    try {
      // Simulate fetching contacts
      dispatch(slice.actions.getContactsSuccess(mockContacts));
    } catch (error) {
      console.error(error);
    }
  };
}

// Mock function to simulate getting conversations
export function getConversations() {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.getConversationsStart());
    try {
      // Simulate fetching conversations
      dispatch(slice.actions.getConversationsSuccess(mockConversations));
    } catch (error) {
      dispatch(slice.actions.getConversationsFailure(error.toString()));
    }
  };
}

// Mock function to simulate getting a specific conversation
export function getConversation(conversationId: string) {
  return async (dispatch: Dispatch) => {
    try {
      // Simulate fetching a conversation by ID
      const conversation = mockConversations.find((c) => c.id === conversationId);
      dispatch(slice.actions.getConversationSuccess(conversation || null));
    } catch (error) {
      console.error(error);
    }
  };
}

// Mock function to simulate sending a message
export function sendMessage(conversationId: string, body: string) {
  return async (dispatch: Dispatch) => {
    try {
      const message: IChatMessage = {
        id: `m${Date.now()}`, // Unique message ID
        body,
        createdAt: new Date(),
        senderId: '1', // Example sender ID
        contentType: 'text',
        attachments: [],
      };
      dispatch(slice.actions.sendMessageSuccess({ conversationId, message }));
    } catch (error) {
      console.error(error);
    }
  };
}

// Mock function to simulate creating a new conversation
export function createNewConversation(recipients: IChatParticipant[], body: string) {
  return async (dispatch: Dispatch) => {
    try {
      const newConversation: IChatConversation = {
        id: `c${Date.now()}`, // Unique conversation ID
        participants: recipients,
        messages: [
          {
            id: `m${Date.now()}`,
            body,
            createdAt: new Date(),
            senderId: '1', // Example sender ID
            contentType: 'text',
            attachments: [],
          },
        ],
        unreadCount: 0,
        type: 'group',
      };
      dispatch(slice.actions.getConversationSuccess(newConversation));
    } catch (error) {
      console.error(error);
    }
  };
}

// Mock function to simulate marking a conversation as seen
export function markAsSeen(conversationId: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(slice.actions.markAsSeenSuccess({ conversationId }));
    } catch (error) {
      console.error(error);
    }
  };
}
