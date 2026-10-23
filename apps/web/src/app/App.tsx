import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router';
import 'dayjs/locale/ru';
import { router } from './router';
import { theme } from './theme';

export function App() {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 1 }}>
        <Notifications />
        <RouterProvider router={router} />
      </DatesProvider>
    </MantineProvider>
  );
}
