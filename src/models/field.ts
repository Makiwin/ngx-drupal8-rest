export interface FieldValue {
  value: boolean | number | string;
}

export interface FieldText extends FieldValue {
  value: string;
}

export interface FieldTextArea extends FieldValue {
  format: string;
  processed: string;
  summary: string;
}

export interface FieldNumber extends FieldValue {
  value: number;
}

export interface FieldBoolean extends FieldValue {
  value: boolean;
}

export interface FieldDate extends FieldValue {
  value: string;
  format: string;
}

export interface FieldEntityReference {
  target_id: string | number;
  target_type?: string;
  target_uuid?: string;
}

export interface FieldEntityReferenceFile extends FieldEntityReference {
  title: string;
  url: string;
  alt?: string;
  height?: number;
  width?: number;
}

export interface FieldEntityReferenceUser extends FieldEntityReference {
  url: string;
}

export interface FieldComment {
  cid: number;
  comment_count: number;
  last_comment_name: string;
  last_comment_timestamp: number;
  last_comment_uid: number;
  status: number;
}

export interface FieldPath {
  alias: string;
  langcode: string;
  pid: number;
}
