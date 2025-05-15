import { StyleSheet, FlatList, ActivityIndicator, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import * as Sharing from "expo-sharing";
import Share from "react-native-share";

export interface IUserResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: any;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.login}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: user?.avatar_url }}
            style={{ width: 120, height: 120 }}
          />
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
            {user?.name}
          </Text>
          <Text style={{ fontSize: 14, color: "#777" }}>@{user?.login}</Text>

          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />

          <Text style={{ fontSize: 18, color: "#000", textAlign: "justify" }}>
            {user?.bio}
          </Text>

          <Text style={{ fontSize: 18, color: "#000", textAlign: "justify" }}>
            {user?.url}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "100%",
  },
  repoItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  repoName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  repoDesc: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
