import type { SkillValue } from "@/domain/welcomeSurvey/value-objects/Skill";
import type { Money } from "../Money";
import type { NamedStat, ProfileDetails } from "./ProductDetails";

export class ProductId {
  constructor(private readonly _value: string) {
    if (!_value) throw new Error("Product ID cannot be empty");
  }

  toValue(): string {
    return this._value;
  }
}

export class ProductName {
  constructor(private readonly _value: string) {
    if (!_value) throw new Error("Product name cannot be empty");
  }

  toValue(): string {
    return this._value;
  }
}

export class ImageUrl {
  constructor(private readonly _value: string) {
    if (!_value) throw new Error("Image URL cannot be empty");
  }

  toValue(): string {
    return this._value;
  }
}

/**
 * A product's lore page and video, shared across every knowledge level: they describe
 * the item itself, not a skill-specific rendering of it.
 */
export class ExtraResources {
  constructor(
    private readonly _loreLink: string,
    private readonly _videoUrl: string,
  ) {}

  getLoreLink(): string {
    return this._loreLink;
  }

  getVideoUrl(): string {
    return this._videoUrl;
  }
}

/**
 * The same vocabulary as WelcomeSurvey's SkillValue: a shopper's stated skill and the
 * knowledge tier a product's content is written for are the same concept.
 */
export type KnowledgeProfile = SkillValue;

export class KnowledgeContent {
  constructor(
    private readonly _beginnerProfile: ProfileDetails,
    private readonly _intermediateProfile: ProfileDetails,
    private readonly _expertProfile: ProfileDetails,
  ) {}

  describeProfile(level: KnowledgeProfile): string {
    return this.getProfile(level).describe();
  }

  listProfileEffects(level: KnowledgeProfile): string[] {
    return this.getProfile(level).listEffects();
  }

  listProfileStats(level: KnowledgeProfile): NamedStat[] {
    return this.getProfile(level).listStats();
  }

  private getProfile(level: KnowledgeProfile): ProfileDetails {
    if (level === "beginner") return this._beginnerProfile;
    if (level === "intermediate") return this._intermediateProfile;
    return this._expertProfile;
  }
}

export class Product {
  constructor(
    private readonly _id: ProductId,
    private readonly _name: ProductName,
    private readonly _price: Money,
    private readonly _imageUrl: ImageUrl,
    private readonly _iconUrl: ImageUrl,
    private readonly _knowledge: KnowledgeContent,
    private readonly _extraResources: ExtraResources,
  ) {}

  displayId(): string {
    return this._id.toValue();
  }

  displayName(): string {
    return this._name.toValue();
  }

  displayPrice(): Money {
    return this._price;
  }

  displayImage(): string {
    return this._imageUrl.toValue();
  }

  displayIcon(): string {
    return this._iconUrl.toValue();
  }

  describeProfile(level: KnowledgeProfile): string {
    return this._knowledge.describeProfile(level);
  }

  listProfileEffects(level: KnowledgeProfile): string[] {
    return this._knowledge.listProfileEffects(level);
  }

  listProfileStats(level: KnowledgeProfile): NamedStat[] {
    return this._knowledge.listProfileStats(level);
  }

  getLoreLink(): string {
    return this._extraResources.getLoreLink();
  }

  getVideoUrl(): string {
    return this._extraResources.getVideoUrl();
  }
}
