import { Container, Stack, Text, Title } from '@mantine/core';
import { CATEGORY_LABELS } from '@ambassador/shared';

export function HomePage() {
  return (
    <Container py="xl">
      <Stack>
        <Title order={2}>Ambassador</Title>
        <Text c="dimmed">
          Каркас приложения. Категории из @ambassador/shared:{' '}
          {Object.values(CATEGORY_LABELS).join(', ')}
        </Text>
      </Stack>
    </Container>
  );
}
