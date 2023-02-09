export type ListContextType = {
  isCreating?: boolean;
  isEditing?: boolean;
  onCreate?: () => void;
  onEdit?: () => void;
  onFinishCreate?: () => void;
  onFinishEdit?: () => void;
};
