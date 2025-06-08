import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="flashcards/index"
        options={{
          title: 'Flashcards',
          tabBarIcon: ({ color }: any) => <MaterialIcons size={28} name='quiz' color={color} />
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: any) => <MaterialIcons size={28} name='all-out' color={color} />,
        }}
      />
      <Tabs.Screen
        name="quiz/index"
        options={{
          title: 'Quiz',
           tabBarIcon: ({ color }: any) => <MaterialIcons size={28} name='assignment' color={color} />,
        }}
      />
    </Tabs>
  );
}
