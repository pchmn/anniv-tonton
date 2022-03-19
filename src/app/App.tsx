import { CheckboxButton } from '@app/components/CheckboxButton';
import { AppShell, Button, Center, Group, Space, Title } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';
import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const db = useMemo(() => getFirestore(), []);
  const possibleActivitiesRef = useMemo(() => doc(db, 'activities', 'possibleActivities'), [db]);
  const activitiesSelectedRef = useMemo(() => doc(db, 'activities', 'activitiesSelected'), [db]);
  const [possibleActivities, setPossibleActivities] = useState<string[]>([]);
  const [activitiesSelected, setActivitiesSelected] = useState<string[]>([]);
  const notifications = useNotifications();

  useEffect(() => {
    const unsubscribe = onSnapshot(possibleActivitiesRef, (doc) => {
      setPossibleActivities(doc.data()?.value);
    });

    return () => unsubscribe();
  }, [possibleActivitiesRef]);

  useEffect(() => {
    const unsubscribe = onSnapshot(activitiesSelectedRef, (doc) => {
      setActivitiesSelected(doc.data()?.value);
    });

    return () => unsubscribe();
  }, [activitiesSelectedRef]);

  const toggleActivity = (activity: string) => {
    if (activitiesSelected.includes(activity)) {
      setActivitiesSelected(activitiesSelected.filter((item) => item !== activity));
    } else if (activitiesSelected.length < 2) {
      setActivitiesSelected([...activitiesSelected, activity]);
    }
  };

  const onSubmit = async () => {
    await setDoc(activitiesSelectedRef, { value: activitiesSelected });
    notifications.showNotification({
      title: "C'est good",
      message: 'Les activités ont bien été enregistrées'
    });
  };

  return (
    <AppShell
      fixed
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 0
        }
      })}
    >
      <Center style={{ padding: 20 }}>
        <Group direction="column" grow>
          <Title order={2}>Wesh cousin, choisis 2 activités qu&apos;on ira faire avec toi</Title>
          {possibleActivities.map((item) => (
            <CheckboxButton
              key={item}
              isSelected={activitiesSelected.includes(item)}
              onClick={() => toggleActivity(item)}
            >
              {item}
            </CheckboxButton>
          ))}
          <Space />
          <Button size="lg" onClick={onSubmit}>
            Valider
          </Button>
        </Group>
      </Center>
    </AppShell>
  );
}

export default App;
