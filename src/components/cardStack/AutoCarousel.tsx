"use client";

import { memo, Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CardStackTextBox from "./CardStackTextBox";
import { cls } from "@/lib/utils";
import { AutoCarouselProps } from "./types";
import { useCardAnimation } from "./useCardAnimation";

const AutoCarousel = ({
    children,
    uniformGridCustomHeightClasses,
    animationType,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout = "default",
    className = "",
    containerClassName = "",
    carouselClassName = "",
    itemClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel,
    showTextBox = true,
}: AutoCarouselProps) => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            watchDrag: false,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
                startDelay: 0,
            }),
        ]
    );

    const childrenArray = Children.toArray(children);
    const heightClasses = uniformGridCustomHeightClasses || "min-h-80 2xl:min-h-90";
    const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

    return (
        <section
            className={cls("w-full py-20", className)}
            aria-label={ariaLabel}
            aria-live="off"
        >
            <div className={cls("w-full md:w-content-width mx-auto", containerClassName)}>
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex flex-col gap-6">
                        {showTextBox && (
                            <CardStackTextBox
                                title={title}
                                description={description}
                                tag={tag}
                                tagIcon={tagIcon}
                                buttons={buttons}
                                textboxLayout={textboxLayout}
                                textBoxClassName={textBoxClassName}
                                titleClassName={titleClassName}
                                descriptionClassName={descriptionClassName}
                                tagClassName={tagClassName}
                                buttonContainerClassName={buttonContainerClassName}
                                buttonClassName={buttonClassName}
                                buttonTextClassName={buttonTextClassName}
                            />
                        )}
                        <div
                            className={cls("overflow-hidden w-full relative z-10 flex mask-padding-x", carouselClassName)}
                            ref={emblaRef}
                        >
                            <div className="flex gap-6 w-full">
                                {Children.map(childrenArray, (child, index) => (
                                    <div
                                        key={index}
                                        className={cls("flex-none w-carousel-item-3 xl:w-carousel-item-4 mb-1", heightClasses, itemClassName)}
                                        ref={(el) => { itemRefs.current[index] = el; }}
                                    >
                                        {child}
                                    </div>
                                ))}
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AutoCarousel.displayName = "AutoCarousel";

export default memo(AutoCarousel);
