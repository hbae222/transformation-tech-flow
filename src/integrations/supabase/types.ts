export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      "ADHD Website Waitlist": {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site1: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site10: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site11: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site12: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site13: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site14: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site15: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site16: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site17: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site18: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site19: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site2: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site20: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site3: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site4: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site5: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site6: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site7: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site8: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_site9: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      waitlist_test: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
