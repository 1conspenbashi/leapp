import { Session } from "../models/session";
import { Repository } from "./repository";

export class SessionManagementService {
  constructor(private repository: Repository) {}

  getSessions(): Session[] {
    return this.repository.getSessions();
  }

  getAssumableSessions(): Session[] {
    return this.repository.listAssumable();
  }

  getActiveAndPendingSessions(): Session[] {
    return this.repository.listActiveAndPending();
  }

  getActiveSessions(): Session[] {
    return this.repository.listActive();
  }

  getPendingSessions(): Session[] {
    return this.repository.listPending();
  }

  getSessionById(selectedSessionId: string): Session {
    return this.getSessions().find((s) => s.sessionId === selectedSessionId);
  }

  getIamRoleChained(session: Session): Session[] {
    return this.repository.listIamRoleChained(session);
  }

  updateSessions(sessions: Session[]): void {
    this.repository.updateSessions(sessions);
  }

  updateSession(id: string, session: Session): void {
    this.repository.updateSession(id, session);
  }

  deleteSession(sessionId: string): void {
    this.repository.deleteSession(sessionId);
  }
}
