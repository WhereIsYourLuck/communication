import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { messagesResolver } from '@shared/conversation/resolvers/messages.resolver';
import { discussionResolver } from '@shared/conversation/resolvers/discussion.resolver';
import { authGuard } from '@core/auth/auth.guard';
import { LoginComponent } from '@core/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'chat/:id',
        component: ChatComponent,
        resolve: { messages: messagesResolver, discussion: discussionResolver },
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
